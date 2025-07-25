import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  findAll() {
    return 'This action returns all books';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return ` This action returns book with Id:${id}`;
  }

  @Post()
  create(@Body() createBookDto: any) {
    return ` This action adds a new book with title: ${createBookDto}`;
  }
}
