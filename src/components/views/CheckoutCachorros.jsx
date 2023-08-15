import {
    Container,
    Col,
    Card,
    Button,
    Row,
    Form,
    Accordion
  } from "react-bootstrap";

  
  
  const Planes = () => {
      
    return (
      <section className="bg-color mainSection">
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="mt-5 mb-5" style={{ width: "400px" }}>
            <Card.Body>
              <Card.Title>
                <h2>Plan cachorros</h2>
              </Card.Title>
              <Card.Text className="fw-bold">9.99 USD al mes</Card.Text>
              <hr />
              <Card.Text>Vacunas y desparasitación</Card.Text>
              <Card.Text>Revisiones y chequeos regulares</Card.Text>
              <Card.Text>Asesoramiento sobre entrenamiento</Card.Text>
              <Card.Text>Microchip y/o identificación</Card.Text>
              <Card.Text className="mb-5">Descuentos en servicios adicionales</Card.Text>
              <Card.Link href="#">Cambiar plan</Card.Link>
            </Card.Body>
          </Card>
        </Container>
        </section>
    );
  };
  
  export default Planes;
  