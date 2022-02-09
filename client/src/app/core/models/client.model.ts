import { Img } from './img.model'
export interface Client {
  name: string
  country: string
  email: string
  password?: string
  profile: Img
  active: boolean
  test: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserToken {
  name: string
  country: string
  email: string
  active: boolean
  exp: number
  iat: number
  uid: string
  updatedAt: Date
}
