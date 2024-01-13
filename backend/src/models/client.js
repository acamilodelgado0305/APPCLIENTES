const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    _id: {
        type: Number, // Asegúrate de que sea consistente con tu base de datos
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    DocumentoIdentidad: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    Ip: {
        type: String,
        required: false
    },
    FechaInstalacion: {
        type: String, // Cambiado a tipo Date
        required: false
    },
    CiudadMunicipio: {
        type: String,
        required: false
    },
    Direccion: {
        type: String,
        required: false
    },
    Barrio: {
        type: String,
        required: false
    },
    Telefono: {
        type: String, // Cambiado a tipo String
        required: false
    },
    Correo: {
        type: String,
        required: false,
        unique: true, // Añadido para asegurar que los correos sean únicos si se proporcionan
        match: /^\S+@\S+\.\S+$/ // Añadido para validar el formato de correo electrónico
    },
    MacAntena: {
        type: String,
        required: false
    },
    Zona: {
        type: String,
        required: false
    },
    PlanInternet: {
        type: String,
        required: false
    }
},
{
    timestamps: true
});

module.exports= mongoose.model('client',clientSchema);