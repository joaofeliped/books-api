import api from '@config/api';

import IBookDTO from '../dtos/IBookDTO';
import ICreateBookDTO from '../dtos/ICreateBookDTO';
import IListBooksDTO from '../dtos/IListBooksDTO';
import IUpdateBookDTO from '../dtos/IUpdateBookDTO';
import IBooksProvider from '../models/IBooksProvider';

class SuperoBooksProvider implements IBooksProvider {
  public async create(data: ICreateBookDTO): Promise<IBookDTO> {
    try {
      const response = await api.post('/Livros', data);

      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro com a API de Livros');
    }
  }

  public async list(query?: string): Promise<IListBooksDTO> {
    try {
      const response = await api.get(`/Livros?${query}`);

      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro com a API de Livros');
    }
  }

  public async searchById(id: string): Promise<IBookDTO | undefined> {
    try {
      const response = await api.get(`Livros/${id}`);

      return response.data;
    } catch (error) {
      if (error?.response?.data?.status === 404) {
        return undefined;
      }

      throw new Error('Ocorreu um erro com a API de Livros');
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await api.delete(`Livros/${id}`);
    } catch (error) {
      throw new Error('Ocorreu um erro com a API de Livros');
    }
  }

  public async update(data: IUpdateBookDTO): Promise<IBookDTO> {
    try {
      const response = await api.put(`Livros/${data.id}`, data);

      return response.data;
    } catch (error) {
      throw new Error('Ocorreu um erro com a API de Livros');
    }
  }
}

export default SuperoBooksProvider;
