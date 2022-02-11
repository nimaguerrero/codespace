export const REPORT_PROBLEMS = [
  {
    name: 'Enlace Caido'
  },
  {
    name: 'Enlace Incorrecto'
  },
  {
    name: 'No hay enlace'
  },
  {
    name: 'Enlace sin archivos'
  }
]

export const IMGTYPES = ['image/jpg', 'image/png', 'image/jpeg', 'image/webp']

export const OTHERFILTERS = {
  orderBy: [
    {
      name: 'Me gusta',
      route: 'likes'
    },
    {
      name: 'Estrellas',
      route: 'stars'
    },
    {
      name: 'Precio',
      route: 'price'
    }
  ],
  authors: [
    { name: 'Codespace', route: 'author' },
    { name: 'Comunidad', route: 'author' }
  ]
}
