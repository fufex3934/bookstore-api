import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.booksService.findById(id);
  }

  // @UseGuards(ApiKeyGuard)
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }
}
