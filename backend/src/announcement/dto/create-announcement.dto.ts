import * as mongoose from 'mongoose';

export class CreateAnnouncementDto {
  readonly name: string;
  readonly description: string;
  readonly user_id: mongoose.Schema.Types.ObjectId;
  readonly price: number;
}
