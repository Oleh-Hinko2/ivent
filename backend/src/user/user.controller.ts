import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import * as mongoose from 'mongoose';
import { UserService } from './user.service';
import { CreateNaturalPersonDto } from './dto/create-natural-person.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { SaveAnnouncementDto } from './dto/save-announcement.dto';
import { CreateLegalPersonDto } from './dto/create-legal-person.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SerializedUser } from './serializers/user.serializer';
import { plainToClass } from 'class-transformer';
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create/natural-person')
  @UseInterceptors(FileInterceptor('logo'))
  createNaturalPerson(
    @UploadedFile() logo,
    @Body() dto: CreateNaturalPersonDto,
  ) {
    return this.userService.createNaturalPerson(dto, logo);
  }

  @Post('/create/legal-person')
  @UseInterceptors(FileInterceptor('logo'))
  createLegalPerson(@UploadedFile() logo, @Body() dto: CreateLegalPersonDto) {
    return this.userService.createLegalPerson(dto, logo);
  }

  @Get()
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('search') search: string,
  ) {
    return this.userService.getAll({ count, offset, search });
  }

  @Get(':id')
  async getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    const user = await this.userService.getOne(id);

    if (user) {
      return plainToClass(SerializedUser, user, {
        excludeExtraneousValues: true,
      });
    }

    throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @Delete(':id')
  delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    const deletedUser = this.userService.delete(id);

    if (deletedUser) {
      return deletedUser;
    }

    throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @Post('/comment')
  @UsePipes(ValidationPipe)
  addComment(@Body() dto: CreateCommentDto) {
    return this.userService.addComment(dto);
  }

  @Post('/saveAnnouncement')
  saveAnnouncement(@Body() dto: SaveAnnouncementDto) {
    return this.userService.saveAnnouncement(dto);
  }
}
