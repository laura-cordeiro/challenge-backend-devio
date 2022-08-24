import { Order } from '../orders/orderEntity';
import { Product } from '../products/productEntity';

export interface OrderProduct {
  id: string;
  quantity: number;
  orderId: string;
  order?: Order;
  productId: string;
  product?: Product;
  createdAt?: string;
  updatedAt?: string;
}
