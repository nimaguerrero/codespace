export interface OrderDetails {
  orderId: string
  projectId: string
  transaction: string
  discount: number
  unitPrice: number
  quantity: number
  createdAt: Date
}
