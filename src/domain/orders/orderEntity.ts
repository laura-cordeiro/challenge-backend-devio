export interface Order {
  id: string;
  clientName: string;
  observation?: string;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}
