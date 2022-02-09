export interface Order {
  subtotal: number
  total: number
  igv: number
  transaction: string
  state: string
  createdAt: Date
  clientId: string
  norder: string
  payer: any
}

export interface OrdersPagination {
  orders: Order[]
  next: number
  previous: number
  pages: number[]
  longitud: number
}
