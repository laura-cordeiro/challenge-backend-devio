import { v4 as uuidv4 } from 'uuid';
import OrdersService from '../orders/ordersService';
import OrdersProductsModel from './ordersProductsModel';

const OrdersProductsService = {
  async createProductsByOrderId(
    orderId: string,
    quantity: number,
    productId: string,
  ) {
    const addProducts = await OrdersProductsModel.create({
      id: uuidv4(),
      orderId,
      quantity,
      productId,
    });
    return addProducts;
  },

  async updateProductsByOrderId(
    orderId: string,
    productId: string,
    quantity: number,
  ) {
    await OrdersProductsModel.update(
      { productId, quantity },
      { where: { orderId } },
    );
    return OrdersService.getOrderById;
  },

  async deleteProductsByOrderId(productId: string) {
    const ordersProductsExists = await OrdersProductsModel.count({
      where: { productId },
    });
    if (!ordersProductsExists)
      throw new Error('Produto não encontrado no pedido');
    await OrdersProductsModel.destroy({
      where: { productId },
    });
  },
};

export default OrdersProductsService;
