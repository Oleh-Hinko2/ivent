import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Announcement } from './schemas/announcement.schema';
import { Model } from 'mongoose';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import * as mongoose from 'mongoose';
import { User } from '../user/schemas/user.schema';
import { FileService } from '../file/file.service';

export interface GetAllData {
  totalItems: number;
  items: Announcement[];
}

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name)
    private announcementModule: Model<Announcement>,
    @InjectModel(User.name)
    private userModule: Model<User>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateAnnouncementDto,
    files: Express.Multer.File[],
  ): Promise<Announcement> {
    const user = await this.userModule.findById(dto.user_id);
    const imagesIds = await this.fileService.fileService(files);

    const announcement = await this.announcementModule.create({
      ...dto,
      watch_number: 0,
      price: dto.price || 0,
      images: imagesIds,
    });

    user.announcements.push(announcement);

    await user.save();

    return announcement;
  }

  async getAll({ count = 10, offset = 0, search = '' }): Promise<GetAllData> {
    const totalItems = await this.announcementModule.count();

    if (search) {
      const announcements = await this.announcementModule
        .find({
          name: { $regex: new RegExp(search, 'i') },
        })
        .skip(offset)
        .limit(count);

      return {
        items: announcements,
        totalItems,
      };
    }

    const announcements = await this.announcementModule
      .find()
      .populate('user_id')
      .skip(offset)
      .limit(count);

    return {
      items: announcements,
      totalItems,
    };
  }

  async getOne(id: mongoose.Schema.Types.ObjectId): Promise<Announcement> {
    const announcement = await this.announcementModule.findById(id);

    return announcement;
  }

  async delete(id: mongoose.Schema.Types.ObjectId): Promise<Announcement> {
    const announcement = await this.announcementModule.findByIdAndDelete(id);

    return announcement;
  }

  async watch(id: mongoose.Schema.Types.ObjectId): Promise<number> {
    const announcement = await this.announcementModule.findById(id);
    announcement.watch_number += 1;

    announcement.save();

    return announcement.watch_number;
  }
}
