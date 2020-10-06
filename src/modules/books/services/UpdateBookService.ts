import { injectable, inject } from 'tsyringe';

import IBooksProvider from '@shared/container/providers/BooksProvider/models/IBooksProvider';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
  idioma: string;
  peso: number;
  comprimento: number;
  largura: number;
  altura: number;
}

interface IResponse {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
  idioma: string;
  peso: number;
  comprimento: number;
  largura: number;
  altura: number;
}

@injectable()
class UpdateBookService {
  constructor(
    @inject('BooksProvider')
    private booksProvider: IBooksProvider,
  ) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const book = await this.booksProvider.searchById(data.id);

    if (!book) {
      throw new AppError('Book not found');
    }

    const updatedBook = await this.booksProvider.update(data);

    return updatedBook;
  }
}

export default UpdateBookService;
