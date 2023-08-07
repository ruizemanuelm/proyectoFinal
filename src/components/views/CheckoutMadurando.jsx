import {
    Container,
    Card,
    Row,

    Accordion
  } from "react-bootstrap";
import Pagos from './Inicio/Pagos'
  
  
  const Planes = () => {
      
    return (
      <>
      <section className="bg-color">
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="mt-5 mb-5" style={{ width: "400px" }}>
            <Card.Body>
              <Card.Title>
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
              <Card.Link href="#">Cambiar plan</Card.Link>
            </Card.Body>
          </Card>
        </Container>
        </section>
        <section>
        <Container className="my-5">
        <Row className="justify-content-center">
        <Accordion defaultActiveKey="0" style={{width: "700px"}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Tarjeta de credito</Accordion.Header>
          <Accordion.Body>
              <Pagos></Pagos>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Abonar en el local</Accordion.Header>
          <Accordion.Body>
              Por favor acerquese a la sucursal mas cercana.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Row>
      </Container>
        </section>
        </>
    );
  };
  
  export default Planes;
  