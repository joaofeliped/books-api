import { injectable, inject } from 'tsyringe';

import IBooksProvider from '@shared/container/providers/BooksProvider/models/IBooksProvider';
import AppError from '@shared/errors/AppError';

@injectable()
class DeleteBookService {
  constructor(
    @inject('BooksProvider')
    private booksProvider: IBooksProvider,
  ) {}

  public async execute(id: string): Promise<void> {
    const book = await this.booksProvider.searchById(id);

    if (!book) {
      throw new AppError('Book not found');
    }

    await this.booksProvider.delete(id);
  }
}

export default DeleteBookService;
