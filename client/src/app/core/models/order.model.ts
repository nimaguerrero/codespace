import { OrderDetails } from './order-details.model';

export interface Order {
  client: string;
  subtotal: number;
  total: number;
  igv: number;
  transaction: string;
  state: string;
  createdAt: Date;
  nsale: string;
}

export interface OrderWithDetails extends Order {
  details: OrderDetails[];
}

export interface OrdersResponse {
  ok: string;
  msg: string;
  orders: OrdersPagination;
}

export interface OrdersPagination {
  orders: OrderWithDetails[];
  next: number;
  previous: number;
  pages: number[];
  longitud: number;
}
