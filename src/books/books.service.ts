import { Injectable } from '@nestjs/common';
import { Books } from './interfaces/books.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private readonly books: Books[] = [
    {
      title: '1984',
      description: 'A dystopian novel by George Orwell',
      author: 'George Orwell',
    },
  ];

  create(book: CreateBookDto) {
    this.books.push(book);
    return book;
  }

  findAll(): Books[] {
    return this.books;
  }
}
