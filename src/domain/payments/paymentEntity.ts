import { Order } from '../orders/orderEntity';

export enum enum_payment {
  pix = 'pix',
  money = 'money',
  creditCard = 'creditCard',
}

export interface Payment {
  id: string;
  type: enum_payment;
  orderId: string;
  order?: Order;
  createdAt?: string;
  updatedAt?: string;
}
