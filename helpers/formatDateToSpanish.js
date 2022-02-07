const formatDateToSpanish = (fecha) => {
  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]
  const DIAS_SEMANA = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]
  return (
    DIAS_SEMANA[fecha.getDay()] +
        ', ' +
        fecha.getDate() +
        ' de ' +
        meses[fecha.getMonth()] +
        ' de ' +
        fecha.getUTCFullYear()
  )
}

module.exports = { formatDateToSpanish }
