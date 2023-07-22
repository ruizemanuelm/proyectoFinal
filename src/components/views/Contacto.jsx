import {
  Container,
  Col,
  Card,
  Button,
  Row,
  Form,
  Carousel,
} from "react-bootstrap";
import bannercontacto from "../../assets/Contact.png";
import bannercontacto2 from "../../assets/Home.png";

const Contacto = () => {
  return (
    <>
      <section className="mainSection">
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannercontacto}
              alt="Oferta de temporada"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bannercontacto2}
              alt="Servicios disponibles"
            />
          </Carousel.Item>
        </Carousel>
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Contáctanos</h1>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mt-3" controlId="formName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                      />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                      />
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formMessage">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Escribe tu mensaje"
                      />
                    </Form.Group>
                    <Button
                      className="mt-3 w-100"
                      variant="primary"
                      type="submit"
                      block
                    >
                      Enviar
                    </Button>
                  </Form>
                </Col>
                <Col md={6}>
                  <Card className="info-box mt-4 border-0">
                    <Card.Body>
                      <h4 className="mb-4">Información de Contacto</h4>
                      <p className="mt-4">
                        Dirección: Av. Veterinaria #1234
                        <br />
                      </p>
                      <p className="mt-4">
                        Teléfono: (123) 456-7890
                        <br />
                      </p>
                      <p className="mt-4">
                        Horario: Lunes a Viernes, 9:00 AM - 6:00 PM
                        <br />
                      </p>
                      <p className="mt-4">Email: info@veterinariaejemplo.com</p>
                      <a href="#">Envianos un WhatsApp</a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacto;
