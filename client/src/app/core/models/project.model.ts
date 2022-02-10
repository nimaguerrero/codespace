import { Img } from './img.model'

export interface Project {
  id: string
  name: string
  description: string
  price: number
  tag: string
  language: string
  link_youtube?: string
  imgs: Img[]
  cover: Img
  preview: string
  download: string
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
