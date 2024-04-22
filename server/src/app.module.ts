import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrandModule } from './brand/brand.module';
import { FilesModule } from './files/files.module';
import { CategoriesModule } from './categories/categories.module';
import { StructureRoutesModule } from './structure-routes/structure-routes.module';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: path.join(__dirname,'.env')}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get('MONGO_LINK');
        const appEnv = configService.get('APP_ENV');
        console.log(uri);
        
        return {
          uri,
          dbName: appEnv === "DEV" ? 'crave_u' : 'name_databases'
        };
      },
    }),
    FilesModule,
    AuthenticationModule,
    BrandModule,
    CategoriesModule,
    StructureRoutesModule,
    ProductModule,
  ],
 
})
export class AppModule {}
