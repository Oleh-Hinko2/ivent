import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnnouncementModule } from './announcement/announcement.module';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { FiltersModule } from './filters/filter.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:olejik1991@ac-i6wygrw-shard-00-00.7tfecik.mongodb.net:27017,ac-i6wygrw-shard-00-01.7tfecik.mongodb.net:27017,ac-i6wygrw-shard-00-02.7tfecik.mongodb.net:27017/?ssl=true&replicaSet=atlas-z8tu2a-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    AnnouncementModule,
    UserModule,
    FileModule,
    FiltersModule,
    AuthModule,
  ],
})
export class AppModule {}
