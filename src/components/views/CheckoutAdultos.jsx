import { Container, Card, Row, Accordion } from "react-bootstrap";
import Pagos from "./publicidad/Pagos";

const Planes = () => {
  return (
    <>
      <section className="bg-color">
        <Container className="d-flex justify-content-center align-items-center">
          <Card className="mt-5 mb-5" style={{ width: "400px" }}>
            <Card.Body>
              <Card.Title>
                <h2>Plan adultos</h2>
              </Card.Title>
              <Card.Text className="fw-bold">11.99 USD al mes</Card.Text>
              <hr/>
              <Card.Text>Chequeos de salud regulares</Card.Text>
              <Card.Text>Vacunas de refuerzo</Card.Text>
              <Card.Text>Desparasitación y control de pulgas/ticks</Card.Text>
              <Card.Text>Análisis de sangre y orina</Card.Text>
              <Card.Text className="mb-5">Alimentación adaptada a la edad</Card.Text>
              <Card.Text>Descuentos en procedimientos médicos</Card.Text>
              <Card.Text>Consejos de cuidado en el hogar</Card.Text>
              <Card.Link href="#">Cambiar plan</Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <section>
        <Container className="my-5">
          <Row className="justify-content-center">
            <Accordion defaultActiveKey="0" style={{ width: "700px" }}>
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
