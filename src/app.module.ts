import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './modules/anime/anime.module';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [AnimeModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
