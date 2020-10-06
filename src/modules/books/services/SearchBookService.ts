import { injectable, inject } from 'tsyringe';

import IBooksProvider from '@shared/container/providers/BooksProvider/models/IBooksProvider';

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
class SearchBookService {
  constructor(
    @inject('BooksProvider')
    private booksProvider: IBooksProvider,
  ) {}

  public async execute(id: string): Promise<IResponse | undefined> {
    return this.booksProvider.searchById(id);
  }
}

export default SearchBookService;
