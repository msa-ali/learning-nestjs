import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptors';
@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    { useClass: CurrentUserInterceptor, provide: APP_INTERCEPTOR } // globally scoped interceptor
  ],
  imports: [
    TypeOrmModule.forFeature([
      User,
    ])
  ]

})
export class UsersModule { }
