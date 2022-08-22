import express from 'express';
import OrdersController from '../domain/orders/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/orders/:id', OrdersController.getOrderById);
ordersRouter.post('/orders/new', OrdersController.createOrder);
ordersRouter.put('/orders/:id', OrdersController.updateOrder);

export default ordersRouter;
