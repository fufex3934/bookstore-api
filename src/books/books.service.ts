import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>,
  ) {}

  async create(book: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
  async findById(id: string): Promise<Book | null> {
    return this.bookModel.findById(id).exec();
  }
}
