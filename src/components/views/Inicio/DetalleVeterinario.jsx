import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import veterinario from "../../../assets/Veterinario1.jpg";


const DetalleVeterinaria = () => {
  return (
    <Container className="my-3 mainSection">
      <Card className="cards-disenio border-0 mt-5 mb-5">
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={veterinario} />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fw-bold display-3">Juan Carlos</Card.Title>
              <hr />
              <Card.Text>
              Especialización en anestesia y cirugía de pequeños animales.
              </Card.Text>
              <hr />
              <Card.Text>
                Después de completar su formación en medicina veterinaria, Juan Carlos se encontró frente a un emocionante camino. Si bien su amor por todos los animales era profundo, su pasión estaba arraigada en los pequeños compañeros que llenaban los hogares de muchas familias. Tomó la audaz decisión de buscar una especialización en anestesia y cirugía de pequeños animales, un mundo donde cada detalle cuenta y cada vida es preciosa.
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
