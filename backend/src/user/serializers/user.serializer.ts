import { Exclude, Expose } from 'class-transformer';
import { Announcement } from '../../announcement/schemas/announcement.schema';
import { Roles } from '../types';

export class SerializedUser {
  @Expose()
  name: string;

  @Expose()
  surname: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  logo: string;

  @Expose()
  role: Roles;

  @Expose()
  representativeName: string;

  @Expose()
  representativeSurname: string;

  @Expose()
  announcements: Announcement[];

  @Expose()
  saveAnnouncements: Announcement[];
  // comments: Comment[];

  @Exclude()
  password: string;
  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
