import FakeBooksProvider from '@shared/container/providers/BooksProvider/fakes/FakeBooksProvider';
import CreateBookService from './CreateBookService';

let fakeBooksProvider: FakeBooksProvider;
let createBookService: CreateBookService;

describe('CreateBookService', () => {
  beforeEach(() => {
    fakeBooksProvider = new FakeBooksProvider();

    createBookService = new CreateBookService(fakeBooksProvider);
  });

  it('should be able to create a new book', async () => {
    const book = await createBookService.execute({
      titulo: 'teste',
      peso: 5,
      altura: 5,
      ano: 2020,
      autor: 'João',
      comprimento: 10,
      editora: 'Teste',
      idioma: 'Português',
      isbn: 123456789,
      largura: 10,
    });

    expect(book).toHaveProperty('id');
  });
});
