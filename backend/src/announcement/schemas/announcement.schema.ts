import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema()
export class Announcement {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user_id: User;

  @Prop()
  watch_number: number;

  @Prop()
  price: number;

  @Prop()
  images: string[];
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
