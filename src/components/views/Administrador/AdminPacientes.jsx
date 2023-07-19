import React from 'react';
import { Button,Table } from 'react-bootstrap';
import ItemPacientes from './pacientes/ItemPacientes';

const AdminPacientes = () => {
    return (
        <section className="container-fluid mainSection">
        <div className="mt-1">
          <h1 className="display-4 text-center"> Lista de pacientes</h1>
        </div>
        <hr />
        <h2>Información de dueños</h2>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Mascota</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemPacientes></ItemPacientes>
            <ItemPacientes></ItemPacientes>
          </tbody>
        </Table>
      </section>
    );
};

export default AdminPacientes;