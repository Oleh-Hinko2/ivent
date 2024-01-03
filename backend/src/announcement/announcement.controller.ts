import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import * as mongoose from 'mongoose';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('/announcement')
export class AnnouncementController {
  constructor(private announcementService: AnnouncementService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  create(@Body() dto: CreateAnnouncementDto, @UploadedFiles() files) {
    return this.announcementService.create(dto, files);
  }

  @Get()
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('search') search: string,
  ) {
    return this.announcementService.getAll({ count, offset, search });
  }

  @Get(':id')
  getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.announcementService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.announcementService.delete(id);
  }

  @Post('/watch/:id')
  watch(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.announcementService.watch(id);
  }
}
