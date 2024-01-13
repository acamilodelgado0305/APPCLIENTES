import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "keep-react";
import { PencilSimpleLine, UserPlus, Trash } from "phosphor-react";
import EditContact from "./CreateClient";

"use client";

export const ButtonGroupComponent = ( handleCreate, handleEdit, handleDelete ) => {
  return (
    <Button.Group>
     <Button type="outlinePrimary" positionInGroup="start" size="xs" onClick={handleCreate}>
        <span className="pr-2">
          <UserPlus size={24} />
        </span>
        Crear
      </Button>
      <Button type="outlinePrimary" positionInGroup="middle" size="xs" onClick={handleEdit}>
        <span className="pr-2">
          <PencilSimpleLine size={24} />
        </span>
        Editar
      </Button>
      <Button type="outlinePrimary" positionInGroup="end" size="xs" onClick={handleDelete}>
        <span className="pr-2">
          <Trash size={24} />
        </span>
        Eliminar
      </Button>
    </Button.Group>
  );
};

function TableClients() {
  const [data, setData] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("http://localhost:7000/api/clients")
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the effect runs once on mount

  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'Nombre', headerName: 'Nombres', width: 150 },
    { field: 'DocumentoIdentidad', headerName: 'Documento', width: 120 },
    { field: 'Estado', headerName: 'Estado', width: 100, renderCell: renderEstadoCell },
    { field: 'Ip', headerName: 'Ip', width: 150 },
    { field: 'FechaInstalacion', headerName: 'Instalacion', width: 170 },
    { field: 'CiudadMunicipio', headerName: 'Municipio', width: 150 },
    { field: 'Barrio', headerName: 'Barrio', width: 150 },
    { field: 'Direccion', headerName: 'Direccion', width: 150 },
    { field: 'Telefono', headerName: 'Teléfono', width: 150 },
    { field: 'Correo', headerName: 'Correo', width: 150 },
    { field: 'MacAntena', headerName: 'MacAntena', width: 150 },
    { field: 'Zona', headerName: 'Zona', width: 80 },
    { field: 'PlanInternet', headerName: 'PlanInternet', width: 150 },
  ];

  function renderEstadoCell(params) {
    let color;
    let backgroundColor;
  
    switch (params.value.toLowerCase()) {
      case 'activo':
        color = 'white';
        backgroundColor = 'green';
        break;
      case 'suspendido':
        color = 'white';
        backgroundColor = 'red';
        break;
      case 'cancelado':
        color = 'white';
        backgroundColor = 'gray';
        break;
      case 'gratis':
        color = 'white';
        backgroundColor = 'blue';
        break;
      default:
        color = 'inherit';
        backgroundColor = 'inherit';
    }
  
    return (
      <div style={{ color, backgroundColor, padding: '5px', borderRadius: '4px', textAlign: 'center' }}>
        {params.value}
      </div>
    );
  }

  const handleCreate = () => {
    setShowCreateForm(true); // Muestra el formulario al hacer clic en "Crear"
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroupComponent handleCreate={handleCreate} />
      </div>
      {showCreateForm ? <EditContact /> : null}
      <div style={{ width: '1000px', height: '100vh', marginTop: "30px", marginRight: '-700px', marginLeft: "-60px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id} // Specify the unique id property
        />
      </div>
    </>
  );
}

export default TableClients;
