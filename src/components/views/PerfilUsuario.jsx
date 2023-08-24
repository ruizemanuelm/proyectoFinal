import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const PerfilUsuario = ({usuarioLogueado}) => {
    return (
        <section className='my-3'>
                      <Card className="bg-warning-subtle">
            <Card.Header className="display-6">
              Bienvenido {usuarioLogueado?.nombreUsuario}
            </Card.Header>
            <Card.Body className="">
              <Row>
                <Col className="mx-1" sm={12} md={4}>
                  <Card.Img
                    className="rounded-5 w-75"
                    variant="top"
                    src="https://static.vecteezy.com/system/resources/previews/020/194/540/non_2x/avatar-of-a-character-with-fox-costume-free-vector.jpg"
                  />
                </Col>
                <Col sm={12} md={6}>
                  <ListGroup variant="flush" className="align-content-center">
                    <p className="fs-4 mt-3">Nombre de usuario</p>
                    <ListGroup.Item
                      action
                      variant="primary"
                      className="fs-3 rounded-3"
                    >
                      {usuarioLogueado?.nombreUsuario}
                    </ListGroup.Item>
                    <p className="fs-4 mt-3">Correo</p>
                    <ListGroup.Item
                      action
                      variant="danger"
                      className="fs-3 rounded-3"
                    >
                      {usuarioLogueado?.email}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
    );
};

export default PerfilUsuario;