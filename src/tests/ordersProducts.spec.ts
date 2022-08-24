/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de OrdersProducts ao executar a função', () => {
  const quantity = 2;
  const productId = 'f2d1740b-6336-4bab-969c-98c3ef14d44e';
  describe('createProductsByOrderId,', () => {
    test('Em caso de sucesso, retornar o status 201', async () => {
      const expectResponse = await supertest(app)
        .post('/ordersproducts/5cfa851f-4adb-41ec-83fa-468948b03f90')
        .send({ quantity, productId });
      expect(expectResponse.status).toBe(201);
    });
    test('Em caso de erro, retornar o status 500', async () => {
      const expectResponse = await supertest(app).get('/fasdff');
      expect(expectResponse.status).toBe(500);
    });
  });

  describe('deleteProductsByOrderId,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app)
        .delete('/ordersproducts/09d00063-88de-440c-ae56-21475fc3ac46')
        .send({ productId });
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de pedido inexistente, retornar mensagem de erro', async () => {
      const expectResponse = await supertest(app).get(
        '/orders/09d00063-88de-440c-ae56-21475fc3ac',
      );
      expect(expectResponse.status).toBe(400);
    });
  });

  describe('updateProductsByOrderId,', () => {
    test('Em caso de sucesso, retornar o pedido criado', async () => {
      const expectResponse = await supertest(app)
        .patch('/orders/09d00063-88de-440c-ae56-21475fc3ac46')
        .send({ productId, quantity });
      expect(expectResponse.status).toBe(200);
    });
  });
});
