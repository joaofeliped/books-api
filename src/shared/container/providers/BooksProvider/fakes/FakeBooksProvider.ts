import IListBooksDTO from '../dtos/IListBooksDTO';
import IBookDTO from '../dtos/IBookDTO';
import IBooksProvider from '../models/IBooksProvider';
import IUpdateBookDTO from '../dtos/IUpdateBookDTO';

class FakeBooksProvider implements IBooksProvider {
  private books: any[] = [];

  public async create(data: IBookDTO): Promise<IBookDTO> {
    this.books.push(data);

    return data;
  }

  public async list(query?: string): Promise<IListBooksDTO> {
    return {
      items: this.books,
      totalCount: this.books.length,
    };
  }

  public async searchById(id: string): Promise<IBookDTO | undefined> {
    const findBook = this.books.find(book => book.id === id);

    return findBook;
  }

  public async delete(id: string): Promise<void> {
    const filteredBooks = this.books.filter(book => book.id !== id);

    this.books = [...filteredBooks];
  }

  public async update(data: IUpdateBookDTO): Promise<IBookDTO> {
    const bookIndex = this.books.findIndex(book => book.id === data.id);

    this.books[bookIndex] = {
      ...data,
    };

    return this.books[bookIndex];
  }
}

export default FakeBooksProvider;
