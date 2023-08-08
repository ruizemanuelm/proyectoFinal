import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import veterinaria from "../../../assets/veterinaria2.jpg";

const DetalleVeterinaria = () => {
  return (
    <Container className="my-3 mainSection">
      <Card className="cards-disenio border-0  mt-5 mb-5">
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={veterinaria} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fw-bold display-3">Maria Jose</Card.Title>
              <hr />
              <Card.Text>
                Especializacion en anestecia y cirugia ortopedica en especies
                mayores.
              </Card.Text>
              <hr />
              <Card.Text>
                Después de trabajar en una clínica veterinaria durante algunos
                años, Laura se dio cuenta de que su verdadera pasión y desafío
                estaban en ayudar a los animales de gran tamaño, como caballos y
                ganado, a superar sus problemas médicos. Decidió tomar un camino
                poco convencional y se inscribió en una especialización en
                anestesia y cirugía ortopédica en especies mayores.
              </Card.Text>
              <Link className="text-light btn btn-primary mb-5" to={"/"}>
                Volver
              </Link>
              <Link
                className="btn btn-primary mb-5 ms-3"
                to={"/crearturno"}
                type="submit"
              >
                Sacar turno
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleVeterinaria;
