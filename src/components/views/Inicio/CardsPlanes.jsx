import React from "react";
import {
    Container,
    Col,
    Card,
    CardGroup,
    Button,
  } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardsPlanes = () => {
  return (
    <>
      <Container>
        <CardGroup className="mt-5 mb-5">
          <Col md={4} ld={3} className="mb-3 px-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>Plan cachorros</h2>
                </Card.Title>
                <Card.Text className="fw-bold">9.99 USD al mes</Card.Text>
                <hr />
                <Card.Text>Vacunas y desparasitación</Card.Text>
                <Card.Text>Revisiones y chequeos regulares</Card.Text>
                <Card.Text>Asesoramiento sobre entrenamiento</Card.Text>
                <Card.Text>Microchip y/o identificación</Card.Text>
                <Card.Text className="mb-5">
                  Descuentos en servicios adicionales
                </Card.Text>
                <Button as={Link} to={'/checkout-cachorros'} className="w-100 mt-5" variant="primary">
                  Ver plan
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} ld={3} className="mb-3 px-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>Plan madurando</h2>
                </Card.Title>
                <Card.Text className="fw-bold">7.99 USD al mes</Card.Text>
                <hr />
                <Card.Text>Vacunas y desparasitación</Card.Text>
                <Card.Text>Revisiones y chequeos regulares</Card.Text>
                <Card.Text>Asesoramiento sobre entrenamiento</Card.Text>
                <Card.Text>Microchip y/o identificación</Card.Text>
                <Card.Text className="mb-5">
                  Descuentos en servicios adicionales
                </Card.Text>
                <Button as={Link} to={'/checkout-madurando'} className="w-100 mt-5" variant="primary">
                  Ver plan
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} ld={3} className="mb-3 px-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>Plan adultos</h2>
                </Card.Title>
                <Card.Text className="fw-bold">11.99 USD al mes</Card.Text>
                <hr />
                <Card.Text>Chequeos de salud regulares</Card.Text>
                <Card.Text>Vacunas de refuerzo</Card.Text>
                <Card.Text>
                  Desparasitación y control de pulgas/ticks
                </Card.Text>
                <Card.Text>Análisis de sangre y orina</Card.Text>
                <Card.Text>Alimentación adaptada a la edad</Card.Text>
                <Card.Text>Descuentos en procedimientos médicos</Card.Text>
                <Card.Text>Consejos de cuidado en el hogar</Card.Text>
                <Button as={Link} to={'/checkout-adultos'} className="w-100" variant="primary">
                  Ver plan
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </CardGroup>
        </Container>
    </>
  );
};

export default CardsPlanes;
