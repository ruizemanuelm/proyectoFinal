import React from "react";
import { Card, Col } from "react-bootstrap";
import { CardImage } from "react-bootstrap-icons";
import CardHeader from "react-bootstrap/esm/CardHeader";

const ItemAdmin = ({ turnos }) => {
const vet1Img = "https://static.vecteezy.com/system/resources/previews/014/175/730/non_2x/young-man-with-blue-shirt-free-vector.jpg"
const vet2Img = "https://static.vecteezy.com/system/resources/previews/014/175/097/non_2x/beauty-young-woman-free-vector.jpg"
const imagenURL = turnos.veterinario === 'Juan Carlos' ? vet1Img : vet2Img;
  return (
    <>
      <Col sm={12} md={4}>
        <Card className="m-1 h-100">
            <CardHeader className="fs-4 bg-white d-flex justify-content-around align-items-center">
              <img className="w-25" src={imagenURL} ></img>
              <b>{turnos.veterinario} </b> </CardHeader>
          <Card.Body>
            <Card.Title>
              <b className="text-danger">Mascota: </b> {turnos.nombMascota}
            </Card.Title>
            <hr />
            <Card.Text>
              {" "}
              <b className="text-danger">Detalle de la cita: </b>
              {turnos.detalleCita}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <small className="fs-5">
            {turnos.fechaTurno}
             </small>
            <small className="text-danger fs-5">
              <b>
              {turnos.hora}Hs.
              </b>
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default ItemAdmin;
