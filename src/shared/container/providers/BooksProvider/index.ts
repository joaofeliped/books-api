import { container } from 'tsyringe';

import IBooksProvider from './models/IBooksProvider';
import SuperoBooksProvider from './implementations/SuperoBooksProvider';

const providers = {
  supero: SuperoBooksProvider,
};

container.registerSingleton<IBooksProvider>('BooksProvider', providers.supero);
