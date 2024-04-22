import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Authentication, AuthenticationSchema } from './authentication.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './authentication.guard';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Authentication.name, schema: AuthenticationSchema },
    ]),
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get('JWT_SECRET'); 
        console.log(`JWT_SECRET-------->: ${uri}`);
        return({
        secret: configService.get('JWT_SECRET') || '6TzPv26KfZguepuKu4rM',
        signOptions: { expiresIn: '30d' },
      })},
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtService, JwtAuthGuard],
  exports: [JwtModule, JwtAuthGuard, AuthenticationService],
})
export class AuthenticationModule {}
