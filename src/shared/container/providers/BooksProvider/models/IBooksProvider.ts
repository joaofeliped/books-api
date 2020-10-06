import ICreateBookDTO from '../dtos/ICreateBookDTO';
import IListBooksDTO from '../dtos/IListBooksDTO';
import IBookDTO from '../dtos/IBookDTO';
import IUpdateBookDTO from '../dtos/IUpdateBookDTO';

export default interface IBooksProvider {
  create(data: ICreateBookDTO): Promise<IBookDTO>;
  list(query?: string): Promise<IListBooksDTO>;
  searchById(id: string): Promise<IBookDTO | undefined>;
  delete(id: string): Promise<void>;
  update(data: IUpdateBookDTO): Promise<IBookDTO>;
}
