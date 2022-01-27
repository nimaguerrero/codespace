if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

/** Inicio del api
 * @module app.js
 * @requires express
 * @requires cors
 * @requires morgan
 * @requires multer
 * @requires path
 * @requires cloudinary
 * @requires ./config/database
 */
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// const { dbConnection } = require('./config/database');

// settings
app.set('port', process.env.PORT || 3000);

// Morgan para mensajes cortos en el backend
app.use(morgan('tiny'));
//// Lectura y parseo del body
app.use(express.json());
////  Leer de formularios
app.use(express.urlencoded({ extended: true }));

// Directorio publico
app.use(express.static('public'));

// dbConnection();

// CORS
app.use(cors());

// ROUTES
app.use('/api/v1.0', require('./routes'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
