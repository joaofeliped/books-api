import { injectable, inject } from 'tsyringe';

import IBooksProvider from '@shared/container/providers/BooksProvider/models/IBooksProvider';

interface IRequest {
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
class CreateBookService {
  constructor(
    @inject('BooksProvider')
    private booksProvider: IBooksProvider,
  ) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const book = await this.booksProvider.create(data);

    return book;
  }
}

export default CreateBookService;
