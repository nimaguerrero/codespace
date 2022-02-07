import { detailsItf } from './sale.interface';
export class SaleClass {
  state: string;
  subtotal: number;
  igv: number;
  total: number;
  details: detailsItf[] | any[];
  transaction = '';
  payer = {};
  client?: string;
  nsale?: string;
  constructor(details: any[], igv: number, subtotal: number, client?: string) {
    this.details = details;
    this.state = 'Pendiente';
    this.subtotal = subtotal ?? 0;
    this.igv = igv ?? 0;
    this.total = subtotal + igv ?? 0;
    if (client) this.client = client;
  }
}
