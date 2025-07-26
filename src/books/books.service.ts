import { Injectable } from '@nestjs/common';
import { Books } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  private readonly books: Books[] = [];

  create(book: Books) {
    this.books.push(book);
  }

  findAll(): Books[] {
    return this.books;
  }
}
