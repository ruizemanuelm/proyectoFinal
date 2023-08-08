import React from 'react';
import { Button, Card,Col } from 'react-bootstrap';
import veterinaria from '../../../assets/Veterinaria2.jpg'
import veterinario from '../../../assets/Veterinario1.jpg'  


const ItemAdmin = ({turnos}) => {
     const imagenVeterinario = () => {
        const imagenURL = turnos.veterinario === "Juan Carlos" ? veterinario : veterinaria;
      return imagenURL;
    };      
    return (
        <>
        <Col sm={12} md={4}>
         <Card className='m-1 h-100'>
        <div className="text-center m-1">
        <Card.Img className="w-100" variant="top" src={imagenVeterinario()} />
        </div>
        <Card.Body>
          <Card.Title><b className='text-danger'>Mascota:  </b>  {turnos.nombMascota}</Card.Title>
          <hr />
          <Card.Text> <b className='text-danger'>Detalle de la cita: </b> 
           {turnos.detalleCita}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-">{turnos.hora + " - " + turnos.fechaTurno}</small>
        </Card.Footer>
      </Card>
        </Col>
      </>
    );
};

export default ItemAdmin;