import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto';

@Controller('messages')
export class MessagesController {
  @Get()
  async findAll(): Promise<string[]> {
    return [''];
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string): Promise<string> {
    return 'Hello i am message ';
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto): Promise<string[]> {
    return [''];
  }
}
