import { Injectable } from '@nestjs/common';
import { Books } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  private readonly books: Books[] = [
    {
      id: '1',
      title: '1984',
      description: 'A dystopian novel by George Orwell',
      author: 'George Orwell',
    },
  ];

  create(book: Books) {
    this.books.push(book);
    return book;
  }

  findAll(): Books[] {
    return this.books;
  }
  findOne(id: string): Books | undefined {
    return this.books.find((book) => book.id === id);
  }
}
