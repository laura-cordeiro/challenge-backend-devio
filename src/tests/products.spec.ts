/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Products ao executar a função', () => {
  describe('getProducts,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/products');
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de erro, retornar o status 500', async () => {
      const expectResponse = await supertest(app).get('/dafasafa');
      expect(expectResponse.status).toBe(500);
    });
  });

  describe('getProductById,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get(
        '/products/0382f295-8376-43e6-8b68-6a4c9d7ac38',
      );
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de pedido inexistente, retornar mensagem de erro', async () => {
      const expectResponse = await supertest(app).get(
        '/orders/09d00063-88de-440c-ae56-21475fc',
      );
      expect(expectResponse.status).toBe(400);
    });
  });

  describe('createProduct,', () => {
    const name = 'Fatia de torta holandesa com doce de leite';
    const description =
      'Torta Holandesa com crocante, doce de leite e biscoito.';
    const price = 19;
    test('Em caso de sucesso, retornar o pedido criado', async () => {
      const expectResponse = await supertest(app)
        .post('/products/new')
        .send({ name, description, price });
      expect(expectResponse.status).toBe(201);
    });
  });

  describe('updateProductByOrderId,', () => {
    const name = 'Fatia de torta holandesa com doce de leite';
    const description =
      'Torta Holandesa com crocante, doce de leite e biscoito.';
    const price = 19;
    test('Em caso de sucesso, retornar o pedido criado', async () => {
      const expectResponse = await supertest(app)
        .patch('/products/0382f295-8376-43e6-8b68-6a4c9d7ac38')
        .send({ name, description, price });
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de produto inexistente, retornar mensagem de erro', async () => {
      const expectResponse = await supertest(app).patch(
        '/orders/0260b8ad-d98e-410e-a96e-f9e5a4e',
      );
      expect(expectResponse.status).toBe(400);
    });
  });
});
