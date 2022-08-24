import express from 'express';
import PaymentsController from '../domain/payments/paymentsController';

const paymentsRouter = express.Router();

paymentsRouter.get('/payments', PaymentsController.getPaymentsOrders);
paymentsRouter.post(
  '/payments/:orderId',
  PaymentsController.createPaymentByOrderId,
);

paymentsRouter.patch('/payments/:id', PaymentsController.updatePaymentById);

export default paymentsRouter;
