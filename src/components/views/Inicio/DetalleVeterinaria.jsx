import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
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
                <br />
                <hr />
                Después de trabajar en una clínica veterinaria durante algunos años, Laura se dio cuenta de que su verdadera pasión y desafío estaban en ayudar a los animales de gran tamaño, como caballos y ganado, a superar sus problemas médicos. Decidió tomar un camino poco convencional y se inscribió en una especialización en anestesia y cirugía ortopédica en especies mayores.
              </Card.Text>
              <Button variant="primary" type="submit" className="mb-5 ">
                <Link className="text-light" to={"/"}>
                Volver
                </Link>
              </Button>
              <Button variant="success" type="submit" className="mb-5 ms-3 rounded-0">
                <Link className="rounded-0 text-light" to={'/crearturno'}>
                Sacar turno
                </Link>
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleVeterinaria;
