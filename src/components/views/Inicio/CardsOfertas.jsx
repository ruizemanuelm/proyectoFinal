import React from "react";
import {
  Container,
  Col,
  Card,
  CardGroup,
  Carousel,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardsOfertas = () => {
  return (
    <>
      <Container>
        <div className="d-flex">
          <h2>Ofertas</h2>
          <Button className="d-flex ms-auto" variant="primary">
            <Link
              to={"/error404"}
            ><h2 className="text-light">Ver ofertas</h2></Link>
          </Button>
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
                    <Card.Title>Pro Plan</Card.Title>
                    <Card.Text>Perro adulto raza mediana.</Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
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
                    <Card.Title>Agility</Card.Title>
                    <Card.Text>
                      Carne sabor a pollo para gatos
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
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
                    <Card.Title>Agility</Card.Title>
                    <Card.Text>
                      Carne de vaca para gatos
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
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
                    <Card.Title>Agility</Card.Title>
                    <Card.Text>Pate sabor natural</Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
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
                    <Card.Title>Eukanuba</Card.Title>
                    <Card.Text>
                      Para perros adultos raza pequeña.
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
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
                    <Card.Title>Dentalife</Card.Title>
                    <Card.Text>
                      Cuida la salud de tu mascota.
                    </Card.Text>
                    <Button variant="primary">
                      <Link
                        to={"/error404"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Comprar
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
        <hr />
      </Container>
    </>
  );
};

export default CardsOfertas;
