/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../config/server';

describe('No controller de Payments ao executar a função', () => {
  describe('getPayments,', () => {
    test('Em caso de sucesso, retornar o status 200', async () => {
      const expectResponse = await supertest(app).get('/payments');
      expect(expectResponse.status).toBe(200);
    });
    test('Em caso de erro, retornar o status 500', async () => {
      const expectResponse = await supertest(app).get('/dafasafa');
      expect(expectResponse.status).toBe(500);
    });
  });

  describe('createPaymentByOrderId,', () => {
    const type = 'money';
    test('Em caso de sucesso, retornar o pagamento criado', async () => {
      const expectResponse = await supertest(app)
        .post('/payments/5cfa851f-4adb-41ec-83fa-468948b03f90')
        .send({ type });
      expect(expectResponse.status).toBe(201);
    });
  });
});
