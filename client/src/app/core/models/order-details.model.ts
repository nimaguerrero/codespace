export interface OrderDetails {
  client: string;
  name_artist_song: string;
  tag: Tag;
  subtotal: number;
  amount: number;
  createdAt: Date;
  sale: string;
}
interface Tag {
  _id: string;
  name: string;
}
