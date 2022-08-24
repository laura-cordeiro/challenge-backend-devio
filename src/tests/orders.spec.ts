/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Orders ao executar a função', () => {
  describe('getOrders,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/orders');
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de erro, retornar o status 500', async () => {
      const expectResponse = await supertest(app).get('/fasdff');
      expect(expectResponse.status).toBe(500);
    });
  });

  describe('getOrderById,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get(
        '/orders/09d00063-88de-440c-ae56-21475fc3ac46',
      );
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de pedido inexistente, retornar mensagem de erro', async () => {
      const expectResponse = await supertest(app).get(
        '/orders/09d00063-88de-440c-ae56-21475fc3ac',
      );
      expect(expectResponse.status).toBe(400);
    });
  });

  describe('createOrder,', () => {
    const clientName = 'Maria';
    const observation = 'Adicionar molho barbecue';
    test('Em caso de sucesso, retornar o pedido criado', async () => {
      const expectResponse = await supertest(app)
        .post('/orders/new')
        .send({ clientName, observation });
      expect(expectResponse.status).toBe(201);
    });
  });

  describe('updateOrder,', () => {
    const clientName = 'Sebastião Alexandre César Pinto';
    const observation = 'Não colocar bacon';
    const totalPrice = 90;
    test('Em caso de sucesso, retornar o pedido criado', async () => {
      const expectResponse = await supertest(app)
        .patch('/orders/09d00063-88de-440c-ae56-21475fc3ac46')
        .send({ clientName, observation, totalPrice });
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de pedido inexistente, retornar mensagem de erro', async () => {
      const expectResponse = await supertest(app).patch(
        '/orders/0260b8ad-d98e-410e-a96e-f9e5a4e',
      );
      expect(expectResponse.status).toBe(400);
    });
  });
});
