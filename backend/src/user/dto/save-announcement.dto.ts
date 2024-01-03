import * as mongoose from 'mongoose';

export class SaveAnnouncementDto {
  readonly announcement_id: mongoose.Schema.Types.ObjectId;
  readonly user_id: mongoose.Schema.Types.ObjectId;
}
