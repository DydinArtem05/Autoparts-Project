import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ROLE } from 'src/types/types';

export type CategoriesType = HydratedDocument<Categories>;

@Schema()
export class Categories {

  @Prop()
  title: ROLE

  @Prop()
  description: string;

}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);

