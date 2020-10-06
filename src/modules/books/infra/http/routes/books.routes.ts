import { Router } from 'express';
import BooksController from '../../controllers/BooksControllers';

const booksRouter = Router();
const booksControllers = new BooksController();

booksRouter.post('/', booksControllers.create);
booksRouter.get('/', booksControllers.index);
booksRouter.get('/:id', booksControllers.search);
booksRouter.delete('/:id', booksControllers.delete);
booksRouter.patch('/:id', booksControllers.update);

export default booksRouter;
