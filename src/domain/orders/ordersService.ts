import { v4 as uuidv4 } from 'uuid';
import OrdersProductsModel from '../ordersProducts/ordersProductsModel';
import PaymentsModel from '../payments/paymentsModel';
import ProductsModel from '../products/productsModel';
import OrdersModel from './ordersModel';

const OrdersService = {
  async getOrders() {
    const ordersResum = await OrdersModel.findAll({
      attributes: ['id', 'clientName', 'totalPrice', 'observation'],
      include: [
        {
          model: OrdersProductsModel,
          as: 'ordersProducts',
          attributes: ['quantity'],
          include: [
            {
              model: ProductsModel,
              as: 'products',
              attributes: ['name', 'description', 'unitPrice'],
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
    return ordersResum;
  },

  async getOrderById(id: string) {
    const orderExists = await OrdersModel.count({ where: { id } });
    if (!orderExists) throw new Error('Pedido não encontrado');
    const orderResum = await OrdersModel.findAll({
      where: { id },
      attributes: ['id', 'clientName', 'totalPrice', 'observation'],
      include: [
        {
          model: OrdersProductsModel,
          as: 'ordersProducts',
          attributes: ['quantity'],
          include: [
            {
              model: ProductsModel,
              as: 'products',
              attributes: ['name', 'description', 'unitPrice'],
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

  async createOrder(clientName: string, observation: string) {
    const newOrder = await OrdersModel.create({
      id: uuidv4(),
      clientName,
      observation,
      totalPrice: 0,
    });
    return newOrder;
  },

  async updateOrder(id: string, clientName: string, observation: string) {
    await OrdersModel.update({ clientName, observation }, { where: { id } });
    return this.getOrderById(id);
  },
};
export default OrdersService;
