import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ROLE } from 'src/types/types';

export type ProductType = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop()
  categorieIds: string[];

  @Prop()
  brandIds: string[];

  @Prop()
  modelIds: string[];

  @Prop()
  price: string;

  @Prop()
  title: string

  @Prop()
  description: string;

  @Prop()
  image: string[];

}

export const ProductSchema = SchemaFactory.createForClass(Product);

