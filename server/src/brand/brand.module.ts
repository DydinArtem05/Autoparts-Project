import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { Brand, BrandSchema } from './brand.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AutoModel, AutoModelSchema } from './model.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Brand.name, schema: BrandSchema },
      { name: AutoModel.name, schema: AutoModelSchema },

    ]),
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule { }
