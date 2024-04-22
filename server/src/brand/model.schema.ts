import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ROLE } from 'src/types/types';
import { Brand } from './brand.schema';

export type AutoModelType = HydratedDocument<AutoModel>;

@Schema()
export class AutoModel {
  
  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brandId: Types.ObjectId;

  @Prop()
  title: ROLE

  @Prop()
  description: string;


}

export const AutoModelSchema = SchemaFactory.createForClass(AutoModel);

