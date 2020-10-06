import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBookService from '@modules/books/services/CreateBookService';
import DeleteBookService from '@modules/books/services/DeleteBookService';
import ListBooksService from '@modules/books/services/ListBooksService';
import SearchBookService from '@modules/books/services/SearchBookService';
import UpdateBookService from '@modules/books/services/UpdateBookService';

export default class BooksController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      titulo,
      isbn,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      largura,
      altura,
    } = request.body;

    const createBook = container.resolve(CreateBookService);

    const book = await createBook.execute({
      titulo,
      isbn,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      largura,
      altura,
    });

    return response.status(201).json(book);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      titulo,
      isbn,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      largura,
      altura,
    } = request.body;

    const updateBook = container.resolve(UpdateBookService);

    const updatedBook = await updateBook.execute({
      id: request.params.id,
      titulo,
      isbn,
      autor,
      editora,
      ano,
      idioma,
      peso,
      comprimento,
      largura,
      altura,
    });

    return response.json(updatedBook);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { busca, anoInicial, anoFinal, max, skip } = request.query;

    const listBooks = container.resolve(ListBooksService);

    const books = await listBooks.execute({
      Busca: busca as string,
      MaxResultCount: max as string,
      SkipCount: skip as string,
      AnoInicial: anoInicial as string,
      AnoFinal: anoFinal as string,
    });

    return response.json(books);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const deleteBook = container.resolve(DeleteBookService);

    await deleteBook.execute(request.params.id);

    return response.status(204).send();
  }

  async search(request: Request, response: Response): Promise<Response> {
    const searchBook = container.resolve(SearchBookService);

    const book = await searchBook.execute(request.params.id);

    if (!book) {
      return response.status(404).send();
    }

    return response.json(book);
  }
}
