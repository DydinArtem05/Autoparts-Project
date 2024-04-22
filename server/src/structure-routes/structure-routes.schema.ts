import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Brand } from 'src/brand/brand.schema';
import { AutoModel } from 'src/brand/model.schema';

export type StructureRoutesType = HydratedDocument<StructureRoutes>;

@Schema()
export class StructureRoutes {

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brandId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: AutoModel.name })
  modelId: Types.ObjectId;
  
  @Prop()
  isMainPatent: boolean

  @Prop()
  parentId: string;
  
  @Prop()
  title: string;

  @Prop({default: []})
  productId: string[];

}

export const StructureRoutesSchema = SchemaFactory.createForClass(StructureRoutes);

