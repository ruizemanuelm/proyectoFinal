import React from 'react';
import { Button, Card,Col } from 'react-bootstrap';

const ItemAdmin = ({turnos}) => {    
    return (
        <>
        <Col sm={12} md={4}>
         <Card className='m-1 h-100'>
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