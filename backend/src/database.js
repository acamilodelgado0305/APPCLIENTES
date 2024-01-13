const mongoose = require('mongoose');
// Cargar variables de entorno desde el archivo .env
require('dotenv').config();

const URI = process.env.MONGODB_URI;

mongoose
    .connect(URI)
    .then(() => console.log("conectado a mongodb atlas"))
    .catch((error) => console.error(error));
