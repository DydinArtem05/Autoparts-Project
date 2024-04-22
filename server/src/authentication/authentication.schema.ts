import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ROLE } from 'src/types/types';

export type AuthenticationType = HydratedDocument<Authentication>;

@Schema()
export class Authentication {
  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  role: ROLE

  @Prop()
  token: string;

  @Prop()
  name: string;
  
  @Prop()
  surname: string;

  @Prop()
  address: string

  @Prop()
  registrationDate: Date;
}

export const AuthenticationSchema = SchemaFactory.createForClass(Authentication);


// .insertOne({login: 'Veronika', role: admin ,password: '$2a$12$6EgNB/y5sqPvsDjRav79zezQaAEQgSO.2Xfmxu6eSq9.XG9rMZivK',token: '',lastEntered: new Date(), })