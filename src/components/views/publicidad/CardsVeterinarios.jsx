import React from "react";
import {
    Container,
    Col,
    Card,
    CardGroup,
    Button,
  } from "react-bootstrap";
import veterinaria from '../../../assets/veterinaria2.jpg'
import veterinario from '../../../assets/Veterinario1.jpg'

const CardsVeterinarios = () => {
    return (
        <>
              <Container>
                <hr />
        <CardGroup className="mt-5 mb-5">
          <Col md={6} ld={3} className="mb-3 px-3">
          <Card className="h-100">
                <Card.Img
                variant="top"
                src={veterinario}
                ></Card.Img>
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>Veterinario</h2>
                </Card.Title>
                <Card.Text className="fw-bold">Juan Carlos</Card.Text>
                <hr />
                <Card.Text>Especializacion en anestecia y cirugia de pequeños animales.</Card.Text>
                <Button className="w-100 mt-5" variant="primary">
                  Ver perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} ld={3} className="mb-3 px-3">
            <Card className="h-100">
                <Card.Img
                variant="top"
                src={veterinaria}
                ></Card.Img>
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>Veterinaria</h2>
                </Card.Title>
                <Card.Text className="fw-bold">Maria Jose</Card.Text>
                <hr />
                <Card.Text>Especializacion en anestecia y cirugia ortopedica en especies mayores</Card.Text>
                <Button className="w-100 mt-5" variant="primary">
                  Ver perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} ld={3} className="mb-3 px-3">
          </Col>
        </CardGroup>
        </Container>
            
        </>
    );
};

export default CardsVeterinarios;