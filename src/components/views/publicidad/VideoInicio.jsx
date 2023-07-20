import React from "react";
import {
    Container,
    Col,
    Card,
    CardGroup,
    Carousel,
    Button,
    Row
  } from "react-bootstrap";
  
const VideoInicio = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            {/* Inserta aquí el iframe del video de YouTube */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/watch?v=lUjL5J_jPd0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col md={4}>
            <h2>Entrena a tu mascota</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoInicio;
