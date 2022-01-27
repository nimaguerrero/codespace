if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
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
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary");

const { dbConnection } = require("./config/database");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// settings
app.set("port", process.env.PORT || 3000);

// Multer para imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    },
});

app.use(multer({ storage }).single("file")); //en el formdata hay que ponerle file
// Morgan para mensajes cortos en el backend
app.use(morgan("tiny"));
//// Lectura y parseo del body
app.use(express.json());
////  Leer de formularios
app.use(express.urlencoded({ extended: true }));

// Directorio publico
app.use(express.static("public"));

dbConnection();

// CORS
app.use(cors());

// ROUTES
app.use("/api/v1.0", require("./app/routes"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
