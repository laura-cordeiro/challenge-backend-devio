import express from 'express';
import PaymentsController from '../domain/payments/paymentsController';

const paymentsRouter = express.Router();

paymentsRouter.get('/payments', PaymentsController.getPaymentsOrders);

export default paymentsRouter;
