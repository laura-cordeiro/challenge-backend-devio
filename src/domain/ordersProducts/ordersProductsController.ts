import { Request, Response } from 'express';
import OrdersProductsService from './ordersProductsService';

const OrdersProductsController = {
  async createProductsByOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { quantity, productId } = req.body;
      const data = await OrdersProductsService.createProductsByOrderId(
        orderId,
        quantity,
        productId,
      );
      res.status(201);
      res.json(data);
    } catch (err: any) {
      res.status(500);
      res.json({ message: err.message });
    }
  },

  async updateProductsByOrderId(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { productId, quantity } = req.body;
      const data = await OrdersProductsService.updateProductsByOrderId(
        orderId,
        productId,
        quantity,
      );
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async deleteProductsByOrderId(req: Request, res: Response) {
    try {
      const { productId } = req.body;
      const data = await OrdersProductsService.deleteProductsByOrderId(
        productId,
      );
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default OrdersProductsController;
