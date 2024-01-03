import { IsNotEmpty, IsString } from 'class-validator';
import * as mongoose from 'mongoose';
export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  @IsNotEmpty()
  user_id: mongoose.Schema.Types.ObjectId;
}
