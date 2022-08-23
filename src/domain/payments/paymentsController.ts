import { Request, Response } from 'express';
import PaymentsService from './paymentsService';

const PaymentsController = {
  async getPaymentsOrders(req: Request, res: Response) {
    try {
      const data = await PaymentsService.getPaymentsOrders();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};
export default PaymentsController;
