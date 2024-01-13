const clientsCtrl = {};
const clientModel = require('../models/client');

// Obtener clientes
clientsCtrl.getClients = async (req, res) => {
    try {
        const clients = await clientModel.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener cliente por ID
clientsCtrl.getClient = async (req, res) => {
    try {
        const client = await clientModel.findById(req.params.id);
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear cliente
clientsCtrl.createClients = async (req, res) => {
    try {
        const {
            _id,
            Nombre,
            DocumentoIdentidad,
            Estado,
            Ip,
            FechaInstalacion,
            CiudadMunicipio,
            Direccion,
            Barrio,
            Telefono,
            Correo,
            MacAntena,
            Zona,
            PlanInternet
        } = req.body;

        const newClient = new clientModel({
            _id,
            Nombre,
            DocumentoIdentidad,
            Estado,
            Ip,
            FechaInstalacion,
            CiudadMunicipio,
            Direccion,
            Barrio,
            Telefono,
            Correo,
            MacAntena,
            Zona,
            PlanInternet
        });

        await newClient.save();
        res.json({ message: 'Client Saved' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar cliente
clientsCtrl.updateClient = async (req, res) => {
    try {
        const {
            Nombre,
            DocumentoIdentidad,
            Estado,
            Ip,
            FechaInstalacion,
            CiudadMunicipio,
            Direccion,
            Barrio,
            Telefono,
            Correo,
            MacAntena,
            Zona,
            PlanInternet
        } = req.body;

        const updatedClientData = {
            Nombre,
            DocumentoIdentidad,
            Estado,
            Ip,
            FechaInstalacion,
            CiudadMunicipio,
            Direccion,
            Barrio,
            Telefono,
            Correo,
            MacAntena,
            Zona,
            PlanInternet
        };

        // Eliminar campos no modificados (undefined) del objeto
        Object.keys(updatedClientData).forEach(key => updatedClientData[key] === undefined && delete updatedClientData[key]);

        await clientModel.findByIdAndUpdate(req.params.id, updatedClientData);
        res.json({ message: 'Cliente Actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar cliente
clientsCtrl.deleteClient = async (req, res) => {
    try {
        await clientModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cliente Eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = clientsCtrl;
