import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function EditContact() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    ip: "",
    fechaInstalacion: "",
    ciudadMunicipio: "",
    direccion: "",
    barrio: "",
    telefono: "",
    mac: "",
    zona: "",
    planInternet: "",
    notes: "",
  });


  return(
    <Form method="post" id="contact-form">
    <label>
        <span>Id</span>
        <input
            type="number"
            name="_id"
            placeholder="1202022"
        />
    </label>

    <p>
        <span>Nombre</span>
        <input
            placeholder="Nombres"
            aria-label="Nombres"
            type="text"
            name="Nombre"
        />
        <input
            placeholder="Apellidos"
            aria-label="Apellidos"
            type="text"
            name="Apellido"
        />
    </p>

    <label>
        <span>Ip</span>
        <input
            placeholder="192.168.0.0"
            aria-label="Ip"
            type="text"
            name="Ip"
        />
    </label>
    <label>
        <span>Fecha de Instalacion</span>
        <input
            placeholder=""
            aria-label="FechaInstalacion"
            type="date"
            name="FechaInstalacion"
        />
    </label>
    <label>
        <span>Ciudad o Municipio</span>
        <input
            placeholder=""
            aria-label="CiudadMunicipio"
            type="text"
            name="CiudadMunicipio"
        />
    </label>
    <label>
        <span>Dirección</span>
        <input
            placeholder=""
            aria-label="Direccion"
            type="text"
            name="Direccion"
        />
    </label>
    <label>
        <span>Barrio</span>
        <input
            placeholder=""
            aria-label="Barrio"
            type="text"
            name="Barrio"
        />
    </label>
    <label>
        <span>Telefono</span>
        <input
            placeholder=""
            aria-label="Telefono"
            type="text"
            name="Telefono"
        />
    </label>
    <label>
        <span>Direccion MAC</span>
        <input
            placeholder=""
            aria-label="MacAntena"
            type="text"
            name="MacAntena"
        />
    </label>
    <label>
        <span>Zona</span>
        <input
            placeholder=""
            aria-label="Zona"
            type="text"
            name="Zona"
        />
    </label>
    <label>
        <span>Plan Internet</span>
        <input
            placeholder=""
            aria-label="PlanInternet"
            type="text"
            name="PlanInternet"
        />
    </label>

    <label>
        <span>Notes</span>
        <textarea
            name="notes"
            rows={6}
        />
    </label>
    <p>
        <div>
            <span>Facturacion Electronica</span>
            <input
                type="checkbox"
                name="FacturacionElectronica"
            />
        </div>

        <button type="submit">Guardar</button>
        <button
            type="button"
            onClick={() => {
                navigate(-1);
            }}
        >
            Cancel
        </button>
    </p>
</Form>
);
}