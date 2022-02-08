if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

/** Inicio del api
 * @module app.js
 * @requires express
 * @requires cors
 * @requires morgan
 * @requires path
 * @requires ./config/database
 */
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const { dbConnection } = require('./config/database')
const { handleError } = require('./helpers/handleError')

app.set('port', process.env.PORT || 3000)

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors())
app.use(handleError)

dbConnection()

app.use('/api/v1.0', require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
