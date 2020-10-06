interface IBooksDTO {
  id: string;
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  ano: number;
}

export default interface IListBooksDTO {
  items: IBooksDTO[];
  totalCount: number;
}
