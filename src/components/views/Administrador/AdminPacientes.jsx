import React, { useEffect, useState } from 'react';
import { Button,Table } from 'react-bootstrap';
import ItemPacientes from './pacientes/ItemPacientes';
import { Link } from 'react-router-dom';
import { obtenerPacientes } from '../../helpers/queries';
import Swal from 'sweetalert2';


const AdminPacientes = () => {
  const [paciente, setPaciente] = useState([]);

useEffect(()=>{
  obtenerPacientes().then((respuesta)=>{
    if(respuesta){
      setPaciente(respuesta)
    }else{
      Swal.fire('Ocurrio un error', 'Intente realizar esta operacion en unos minutos', 'error')
    }
  })
},[])
    return (
      
        <section className="container-fluid mainSection">
        <div className="d-flex justify-content-end  align-items-center mt-1">
          <h1 className="display-6 text-center col-md-12"> Lista de pacientes</h1>
          <Link className="btn btn-primary" to="/admin/crearpaciente">
          Agregar
        </Link>
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
            {
              paciente.map((paciente)=> <ItemPacientes paciente ={paciente} key={paciente._id} setPaciente={paciente}></ItemPacientes>)
            }
          </tbody>
        </Table>

        
      </section>
    );
};

export default AdminPacientes;