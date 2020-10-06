import { injectable, inject } from 'tsyringe';

import IBooksProvider from '@shared/container/providers/BooksProvider/models/IBooksProvider';

interface IRequest {
  Busca?: string;
  AnoInicial?: string;
  AnoFinal?: string;
  Sorting?: string;
  MaxResultCount?: string;
  SkipCount?: string;
}

interface IResponseBook {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
}

interface IResponse {
  items: IResponseBook[];
  totalCount: number;
  max: number;
  page: number;
}

@injectable()
class ListBooksService {
  constructor(
    @inject('BooksProvider')
    private booksProvider: IBooksProvider,
  ) {}

  public async execute({
    AnoFinal,
    AnoInicial,
    MaxResultCount = '10',
    SkipCount = '1',
    Sorting,
    Busca,
  }: IRequest): Promise<IResponse> {
    let query = '';

    if (Busca) {
      query += `Busca=${Busca}&`;
    }

    if (AnoInicial) {
      query += `AnoInicial=${AnoInicial}&`;
    }

    if (AnoFinal) {
      query += `AnoFinal=${AnoFinal}&`;
    }

    if (MaxResultCount) {
      query += `MaxResultCount=${MaxResultCount}&`;
    }

    if (SkipCount) {
      query += `SkipCount=${SkipCount}&`;
    }

    if (Sorting) {
      query += `Sorting=${Sorting}&`;
    }

    const books = await this.booksProvider.list(query);

    return {
      items: books.items,
      totalCount: books.totalCount,
      max: parseInt(MaxResultCount, 10),
      page: parseInt(SkipCount, 10),
    };
  }
}

export default ListBooksService;
