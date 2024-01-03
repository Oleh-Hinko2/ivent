import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { CreateFilterDto } from './dto/create-filter.dto';
import { Filter } from './schemas/filter.schema';
import { FILTER_STATUS } from './constants';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { FilterStatus } from './models';
import { FileService, FileTypes } from '../file/file.service';

export interface GetAllData {
  totalItems: number;
  items: Filter[];
}

@Injectable()
export class FiltersService {
  constructor(
    @InjectModel(Filter.name)
    private filtersModule: Model<Filter>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateFilterDto,
    icon: Express.Multer.File,
  ): Promise<Filter> {
    const iconPath = await this.fileService.createImage(
      icon,
      FileTypes.FILTERS,
    );

    const filter = await this.filtersModule.create({
      ...dto,
      status: FILTER_STATUS.pending,
      icon: iconPath,
    });

    return filter;
  }

  async getAll({
    count = 10,
    offset = 0,
    search = '',
    status,
  }): Promise<GetAllData> {
    const totalItems = await this.filtersModule.count();

    if (!status) {
      const filters = await this.filtersModule.find();

      return {
        items: filters,
        totalItems,
      };
    }

    if (search) {
      const filters = await this.filtersModule
        .find({
          name: { $regex: new RegExp(search, 'i') },
        })
        .skip(offset)
        .limit(count);

      return {
        items: filters,
        totalItems,
      };
    }

    const filters = await this.filtersModule
      .find({ status: status })
      .skip(offset)
      .limit(count);

    return {
      items: filters,
      totalItems,
    };
  }

  async getOne(id: mongoose.Schema.Types.ObjectId): Promise<Filter> {
    const filter = await this.filtersModule.findById(id);

    return filter;
  }

  async delete(id: mongoose.Schema.Types.ObjectId): Promise<Filter> {
    const filter = await this.filtersModule.findByIdAndDelete(id);

    return filter;
  }

  async update(
    id: mongoose.Schema.Types.ObjectId,
    dto: UpdateFilterDto,
  ): Promise<Filter> {
    const filter = await this.filtersModule.findByIdAndUpdate(id, {
      name: dto.name,
      description: dto.description,
    });

    return filter;
  }

  async updateStatus(
    id: mongoose.Schema.Types.ObjectId,
    status: FilterStatus,
  ): Promise<Filter> {
    const filter = await this.filtersModule.findByIdAndUpdate(id, {
      status,
    });

    return filter;
  }
}
