import express from 'express';
import PaymentsController from '../domain/payments/paymentsController';

const paymentsRouter = express.Router();

paymentsRouter.get('/payments', PaymentsController.getPaymentsOrders);
paymentsRouter.post(
  '/payments/:orderId',
  PaymentsController.createPaymentByOrderId,
);

export default paymentsRouter;
