import { Request, Response } from 'express';
import OrdersService from './ordersService';

const OrdersController = {
  async getOrders(req: Request, res: Response) {
    try {
      const data = await OrdersService.getOrders();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async getOrderById(req: Request, res: Response) {
    try {
      const data = await OrdersService.getOrderById(req.params.id);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async createOrder(req: Request, res: Response) {
    try {
      const { clientName, obs } = req.body;
      const data = await OrdersService.createOrder(clientName, obs);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },

  async updateOrder(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { clientName, obs } = req.body;
      const data = await OrdersService.updateOrder(id, clientName, obs);
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};
export default OrdersController;
