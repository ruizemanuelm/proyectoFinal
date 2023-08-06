import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ItemTurnos from './Turnos/ItemTurnos';
import { obtenerTurnos } from '../../helpers/queries';


const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);

useEffect(()=>{
  obtenerTurnos().then((respuesta)=>{
    if(respuesta){
      setTurnos(respuesta)
    }else{
      Swal.fire('Ocurrio un error', 'Intente realizar esta operacion en unos minutos', 'error')
    }
  })
},[])
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
         {turnos.map((turnos)=><ItemTurnos turnos={turnos} key={turnos._id} setTurnos={setTurnos}></ItemTurnos>)}
          </tbody>
        </Table>
      </section>
    );
};

export default AdminTurnos;