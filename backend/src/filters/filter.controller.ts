import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import * as mongoose from 'mongoose';
import { FiltersService } from './filter.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { UpdateFilterStatusDto } from './dto/update-status.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilterStatus } from './models';

@Controller('/filters')
export class FiltersController {
  constructor(private filtersService: FiltersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('icon'))
  create(@UploadedFile() icon, @Body() dto: CreateFilterDto) {
    return this.filtersService.create(dto, icon);
  }

  @Get()
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('search') search: string,
    @Query('status') status: FilterStatus,
  ) {
    return this.filtersService.getAll({ count, offset, search, status });
  }

  @Get(':id')
  getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.filtersService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.filtersService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: mongoose.Schema.Types.ObjectId,
    @Body() dto: UpdateFilterDto,
  ) {
    return this.filtersService.update(id, dto);
  }

  @Put('/status/:id')
  updateStatus(
    @Param('id') id: mongoose.Schema.Types.ObjectId,
    @Body() dto: UpdateFilterStatusDto,
  ) {
    return this.filtersService.updateStatus(id, dto.status);
  }
}
