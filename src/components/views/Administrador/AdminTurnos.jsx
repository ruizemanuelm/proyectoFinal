import React from 'react';
import { Table } from 'react-bootstrap';
import ItemTurnos from './Turnos/ItemTurnos';


const AdminTurnos = () => {
    return (
        <section className="container-fluid mainSection">
        <div className="mt-1">
          <h1 className="display-6 text-center">Turnos</h1>
          <hr />
        </div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Detalle</th>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
           <ItemTurnos></ItemTurnos>
          </tbody>
        </Table>
      </section>
    );
};

export default AdminTurnos;