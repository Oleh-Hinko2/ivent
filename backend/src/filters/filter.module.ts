import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Filter, FilterSchema } from './schemas/filter.schema';
import { FiltersService } from './filter.service';
import { FiltersController } from './filter.controller';
import { FileService } from '../file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Filter.name, schema: FilterSchema }]),
  ],
  controllers: [FiltersController],
  providers: [FiltersService, FileService],
})
export class FiltersModule {}
