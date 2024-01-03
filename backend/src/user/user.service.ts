import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comment.schema';
import { FileService } from '../file/file.service';
import { SaveAnnouncementDto } from './dto/save-announcement.dto';
import { Announcement } from '../announcement/schemas/announcement.schema';
import {
  CreateNaturalPersonDto,
  SerializedNaturalPerson,
} from './dto/create-natural-person.dto';
import {
  CreateLegalPersonDto,
  SerializedLegalPerson,
} from './dto/create-legal-person.dto';
import { encodePassword } from '../utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Roles } from './types';
import { SerializedUser } from './serializers/user.serializer';
import { plainToClass } from 'class-transformer';

export interface GetAllData {
  totalItems: number;
  items: (SerializedLegalPerson | SerializedNaturalPerson)[];
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModule: Model<User>,
    @InjectModel(Comment.name)
    private commentModule: Model<Comment>,
    @InjectModel(Announcement.name)
    private announcementModule: Model<Announcement>,
    private fileService: FileService,
    private jwtService: JwtService,
  ) {}

  async createNaturalPerson(
    dto: CreateNaturalPersonDto,
    logo: Express.Multer.File,
  ): Promise<User> {
    // const filePath = this.fileService.createImage(logo, FileTypes.USER);

    const password = encodePassword(dto.password);

    const user = await this.userModule.create({
      ...dto,
      // logo: filePath,
      role: Roles.user,
      password,
    });

    return user;
  }

  async createLegalPerson(
    dto: CreateLegalPersonDto,
    logo: Express.Multer.File,
  ): Promise<User> {
    // const filePath = this.fileService.createImage(logo, FileTypes.USER);

    const password = encodePassword(dto.password);

    const user = await this.userModule.create({
      ...dto,
      // logo: filePath,
      role: Roles.company,
      password,
    });

    return user;
  }

  async getAll({ count = 10, offset = 0, search = '' }): Promise<GetAllData> {
    const totalItems = await this.userModule.count();

    if (search) {
      const users = await this.userModule
        .find({
          name: { $regex: new RegExp(search, 'i') },
        })
        .skip(offset)
        .limit(count);

      return {
        items: users.map((user) =>
          plainToClass(SerializedUser, user, {
            excludeExtraneousValues: true,
          }),
        ),
        totalItems,
      };
    }

    const users = await this.userModule.find().skip(offset).limit(count);

    return {
      items: users.map((user) =>
        plainToClass(SerializedUser, user, {
          excludeExtraneousValues: true,
        }),
      ),
      totalItems,
    };
  }

  async getOne(id: mongoose.Schema.Types.ObjectId): Promise<User> {
    const user = await this.userModule
      .findById(id)
      .populate('comments')
      .populate('announcements')
      .populate('saveAnnouncements');

    return user;
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = this.userModule.findOne({ email });

    return user;
  }

  async delete(id: mongoose.Schema.Types.ObjectId): Promise<User> {
    const user = await this.userModule.findByIdAndDelete(id);

    return user;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const user = await this.userModule.findById(dto.user_id);
    const comment = await this.commentModule.create({ ...dto });
    user.comments.push(comment);

    user.save();

    return comment;
  }

  async saveAnnouncement(dto: SaveAnnouncementDto): Promise<User> {
    const user = await this.userModule.findById(dto.user_id);
    const announcement = await this.announcementModule.findById(
      dto.announcement_id,
    );

    user.saveAnnouncements.push(announcement);

    user.save();

    return user;
  }
}
