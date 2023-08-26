import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Card,
  CardGroup
} from "react-bootstrap";
import { obtenerComentarios } from "../../helpers/queries";

const ItemComentario = ({ usuarioLogueado }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    obtenerComentarios().then((respuesta) => {
      setComentarios(respuesta);
    });
  }, []);

  return (
    <>
      <Container>
            <CardGroup>
              {comentarios?.map((comentario) => (
                <Col md={6} ld={3} sm={6} lg={3} className="mb-3 px-3" key={comentario._id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="text-color">{comentario.nombre}</Card.Title>
                      <hr />
                      <Card.Text>{comentario.contenidoComentario}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </CardGroup>
      </Container>
    </>
  );
};

export default ItemComentario;
