import React from 'react';
import { Button, Card, OverlayTrigger, Tooltip,Col } from 'react-bootstrap';
const ItemAdmin = ({turnos}) => {

      const BotonEliminar = (props) => (
        <Tooltip id="botonEliminar" {...props}>
          Eliminar
        </Tooltip>
      );
    return (
        <>
        <Col sm={12} md={4}>
         <Card className='m-1'>
        <div className="text-center">
        <Card.Img className="imagen" variant="top" src="https://img.freepik.com/vector-premium/avatar-perros-lindos-retrato-cabeza-perrito-adorable-hocico-cachorro-pura-raza-labrador-cara-cachorros-felices-lengua-fuera-ilustracion-vector-plano-hocico-mascotas-encantador-aislado-sobre-fondo-blanco_633472-124.jpg" />
        </div>
        <Card.Body>
          <Card.Title><b className='text-danger'>Mascota:  </b>  {turnos.nombMascota}</Card.Title>
          <Card.Text> <b className='text-danger'>Detalle de la cita: </b> 
           {turnos.detalleCita}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-">{turnos.hora + " " + turnos.fechaTurno}</small>
        </Card.Footer>
      </Card>
        </Col>
      </>
    );
};

export default ItemAdmin;