import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import * as mongoose from 'mongoose';
import { Announcement } from '../../announcement/schemas/announcement.schema';
import { Comment } from './comment.schema';
import { Roles } from '../types';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  logo: string;

  @Prop()
  password: string;

  @Prop()
  role: Roles;

  @Prop()
  representativeName: string;

  @Prop()
  representativeSurname: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Announcement' }],
  })
  announcements: Announcement[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  comments: Comment[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Announcement' }],
  })
  saveAnnouncements: Announcement[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
