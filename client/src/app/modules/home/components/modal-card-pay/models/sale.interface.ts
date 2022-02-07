export interface detailsItf {
  tag: string;
  subtotal: number;
  amount: number;
  name_artist_song: string;
  client?: string;
  sale?: string;
}
export interface ventaItf {
  state: string;
  details: detailsItf[] | any[];
  subtotal: number;
  igv: number;
  total: number;
  client?: string;
  nsale?: string;
  transaction?: string;
  payer?: any;
}
