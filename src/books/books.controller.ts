import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { UserRole } from 'src/users/schemas/user.schema';
import { RolesGuard } from 'src/auth/guards/roles.guard';

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

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async delete(@Param('id') id: string) {
    return await this.booksService.delete(id);
  }
}
