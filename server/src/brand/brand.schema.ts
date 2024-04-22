import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ROLE } from 'src/types/types';

export type BrandType = HydratedDocument<Brand>;

@Schema()
export class Brand {

  @Prop()
  title: string

  @Prop()
  description: string;

  @Prop()
  image: string[];

}

export const BrandSchema = SchemaFactory.createForClass(Brand);

