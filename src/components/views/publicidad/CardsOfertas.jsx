import React from 'react';
import {
    Container,
    Col,
    Card,
    CardGroup,
    Carousel,
    Button,
  } from "react-bootstrap";

  
const CardsOfertas = () => {
    return (
        <>
        <Container>
        <div className="d-flex">
        <h2>Ofertas</h2>
        <a className="ms-auto text-danger" href=""><h2>Ver ofertas</h2></a>
        </div>
        <Carousel>
          <Carousel.Item>
            <CardGroup className="mt-5 mb-5">
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/165009-282-282?v=1776121413&width=282&height=282&aspect=true"
                    alt="Cachorro"
                  />
                  <Card.Body>
                    <Card.Title>Plan primeros pasos</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de 0 a 5 años
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/167009-282-282?v=1775959738&width=282&height=282&aspect=true"
                    alt="Perro mediano"
                  />
                  <Card.Body>
                    <Card.Title>Plan Madurando</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de 5 a 10 años
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/167000-282-282?v=1775959730&width=282&height=282&aspect=true"
                    alt="Perro adulto"
                  />
                  <Card.Body>
                    <Card.Title>Plan adultos</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de más de 10 años.
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/166998-282-282?v=1775959733&width=282&height=282&aspect=true"
                    alt="Cachorro"
                  />
                  <Card.Body>
                    <Card.Title>Plan primeros pasos</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de 0 a 5 años
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup className="mt-5 mb-5">
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/168956-282-282?v=1775689412&width=282&height=282&aspect=true"
                    alt="Perro mediano"
                  />
                  <Card.Body>
                    <Card.Title>Plan Madurando</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de 5 a 10 años
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} ld={3} className="mb-3 px-3">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src="https://nanolog.vtexassets.com/arquivos/ids/165627-282-282?v=1775351773&width=282&height=282&aspect=true"
                    alt="Perro adulto"
                  />
                  <Card.Body>
                    <Card.Title>Plan adultos</Card.Title>
                    <Card.Text>
                      Servicios para mascotas de más de 10 años.
                    </Card.Text>
                    <Button variant="primary">Hacer consulta</Button>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
        </Container>
        </>
    );
};

export default CardsOfertas;