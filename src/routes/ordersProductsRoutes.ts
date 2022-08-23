import express from 'express';
import OrdersProductsController from '../domain/ordersProducts/ordersProductsController';

const ordersProductsRouter = express.Router();

ordersProductsRouter.post(
  '/ordersproducts/:orderId',
  OrdersProductsController.createProductsByOrderId,
);

ordersProductsRouter.delete(
  '/ordersproducts/:orderId',
  OrdersProductsController.deleteProductsByOrderId,
);

ordersProductsRouter.patch(
  '/ordersproducts/:orderId',
  OrdersProductsController.updateProductsByOrderId,
);

export default ordersProductsRouter;
