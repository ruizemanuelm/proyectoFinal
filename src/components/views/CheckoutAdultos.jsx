import { Container, Card, Row, Accordion } from "react-bootstrap";


const Planes = () => {
  return (
      <section className="bg-color mainSection">
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
  );
};

export default Planes;
