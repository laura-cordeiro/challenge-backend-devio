import { v4 as uuidv4 } from 'uuid';
import OrdersProductsModel from '../ordersProducts/ordersProductsModel';
import PaymentsModel from '../payments/paymentsModel';
import ProductsModel from '../products/productsModel';
import OrdersModel from './ordersModel';

const OrdersService = {
  async getOrderById(id: string) {
    const orderExists = await OrdersModel.count({
      where: { id },
    });
    if (!orderExists) throw new Error('Pedido não encontrado');
    const orderResum = await OrdersModel.findAll({
      where: { id },
      attributes: ['id', 'clientName', 'totalPrice', 'obs'],
      include: [
        {
          model: OrdersProductsModel,
          as: 'ordersProducts',
          attributes: ['quantity'],
          include: [
            {
              model: ProductsModel,
              as: 'products',
              attributes: ['name', 'description', 'price'],
            },
          ],
        },
        {
          model: PaymentsModel,
          as: 'payments',
          attributes: ['type'],
        },
      ],
    });
    return orderResum;
  },

  async createOrder(clientName: string) {
    const newOrder = await OrdersModel.create({
      id: uuidv4(),
      clientName,
      totalPrice: 0,
    });
    return newOrder;
  },

  async updateOrder(clientName: string, id: string) {
    await OrdersModel.update({ clientName }, { where: { id } });
  },
};

export default OrdersService;
