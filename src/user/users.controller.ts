import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(public usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() userData: User): Promise<User> {
    return this.usersService.create(userData);
  }

  @Put()
  update(@Body() userData: User): Promise<UpdateResult> {
    return this.usersService.update(userData);
  }

  @Get(':id')
  find(@Param('id') id): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }
}
