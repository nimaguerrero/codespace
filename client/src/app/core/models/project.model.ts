import { Img } from './img.model'

export interface Project {
  id: string
  name: string
  description: string
  price: number
  tag: { name: string; color: string }
  language: { name: string; color: string }
  link_youtube?: string
  imgs: Img[]
  cover: Img
  author: { name: string; profile: Img }
  preview: string
  download: string
  likes: number
  ndownloads: number
  stars: number
  state: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ProjectsPagination {
  projects: Project[]
  next: number
  previous: number
  pages: number[]
  longitud: number
}
