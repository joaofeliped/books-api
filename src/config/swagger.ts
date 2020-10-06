export default {
  openapi: '3.0.1',
  info: {
    title: 'Books-API',
    description: 'Books api CRUD.',
    version: '1.2.0',
  },
  basePath: '/',
  components: {
    schemas: {
      Books: {
        type: 'object',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            titulo: {
              type: 'string',
            },
            isbn: {
              type: 'string',
            },
            autor: {
              type: 'string',
            },
            editora: {
              type: 'string',
            },
            ano: {
              type: 'integer',
            },
          },
        },
        totalCount: {
          type: 'integer',
        },
        max: {
          type: 'integer',
        },
        page: {
          type: 'integer',
        },
      },
    },
  },
  produces: ['application/json'],
  paths: {
    '/books': {
      post: {
        'x-swagger-router-controller': 'books',
        tags: ['BOOKS'],
        description: 'Route to create book',
        parameters: [
          {
            name: 'titulo',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'isbn',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'autor',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'editora',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'ano',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'idioma',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'peso',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'comprimento',
            required: true,
            in: 'formData',
            type: 'intger',
          },
          {
            name: 'largura',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'altura',
            required: true,
            in: 'formData',
            type: 'integer',
          },
        ],
        responses: {
          201: {
            description: 'Book created',
          },
          400: {
            description: 'When a required parameter was not informed',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
      get: {
        'x-swagger-router-controller': 'books',
        tags: ['BOOKS'],
        description: 'Route to list books',
        parameters: [
          {
            name: 'titulo, autor ou ISBN',
            required: false,
            in: 'query',
            type: 'string',
          },
          {
            name: 'anoInicial',
            required: false,
            in: 'query',
            type: 'string',
          },
          {
            name: 'anoFinal',
            required: false,
            in: 'query',
            type: 'integer',
          },
          {
            name: 'max',
            required: false,
            in: 'query',
            type: 'integer',
          },
          {
            name: 'skip',
            required: false,
            in: 'query',
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Successful request',
            schema: {
              $ref: '#/components/schemas/Books',
            },
          },
          400: {
            description: 'When a required parameter was not informed',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
    },
    '/books/{id}': {
      get: {
        'x-swagger-router-controller': 'books',
        tags: ['BOOKS'],
        description: 'Route to get book by id',
        parameters: [
          {
            name: 'id',
            required: true,
            in: 'path',
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'Book found',
          },
          404: {
            description: 'When the book was not found',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
      put: {
        'x-swagger-router-controller': 'books',
        tags: ['BOOKS'],
        description: 'Route to update book',
        parameters: [
          {
            name: 'titulo',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'isbn',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'autor',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'editora',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'ano',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'idioma',
            required: true,
            in: 'formData',
            type: 'string',
          },
          {
            name: 'peso',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'comprimento',
            required: true,
            in: 'formData',
            type: 'intger',
          },
          {
            name: 'largura',
            required: true,
            in: 'formData',
            type: 'integer',
          },
          {
            name: 'altura',
            required: true,
            in: 'formData',
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Book updated',
          },
          404: {
            description: 'When the book was not found',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
      delete: {
        'x-swagger-router-controller': 'books',
        tags: ['BOOKS'],
        description: 'Route to delete book by id',
        parameters: [
          {
            name: 'id',
            required: true,
            in: 'path',
            type: 'string',
          },
        ],
        responses: {
          204: {
            description: 'Book removed',
          },
          404: {
            description: 'When the book was not found',
          },
          500: {
            description: 'Internal Server Error',
          },
        },
      },
    },
  },
};
