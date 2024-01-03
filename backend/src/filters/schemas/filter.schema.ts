import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FilterDocument = HydratedDocument<Filter>;

@Schema()
export class Filter {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  icon: string;
}

export const FilterSchema = SchemaFactory.createForClass(Filter);
