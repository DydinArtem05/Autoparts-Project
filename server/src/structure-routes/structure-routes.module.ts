import { Module } from '@nestjs/common';
import { StructureRoutesService } from './structure-routes.service';
import { StructureRoutesController } from './structure-routes.controller';
import { StructureRoutes, StructureRoutesSchema } from './structure-routes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
          { name: StructureRoutes.name, schema: StructureRoutesSchema },
    ]),

  ],
  controllers: [StructureRoutesController],
  providers: [StructureRoutesService],
})
export class StructureRoutesModule {}
