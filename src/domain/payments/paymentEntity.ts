export enum enum_payment {
  pix = 'pix',
  money = 'money',
  creditCard = 'creditCard',
}

export interface Payment {
  id: string;
  type: enum_payment;
  orderId: string;
  createdAt?: string;
  updatedAt?: string;
}
