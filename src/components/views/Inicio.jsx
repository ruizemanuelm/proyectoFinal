import {
  Container,
  Col,
  Card,
  CardGroup,
  Carousel,
  Button,
} from "react-bootstrap";
import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import CarouselCards from "./publicidad/CarouselCards";

const Inicio = () => {
  return (
    <section className="mainSection">
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            alt="Oferta de temporada"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Servicios disponibles"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Marcas con las que trabajamos"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <CardGroup className="mt-5 mb-5">
          <Card>
            <Card.Body className="justify-content-center">
              <Card.Title className="text-danger text-center">
                Atencion online
              </Card.Title>
              <Card.Text className="text-center">
                Garantizamos la mejor atencion.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-danger text-center">
                Atencion personalizada a domicilio
              </Card.Title>
              <Card.Text className="text-center">
                Rapida atencion en casos de urgencia.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-danger text-center">
                Salud preventiva
              </Card.Title>
              <Card.Text className="text-center">
                La prevención es la clave para una vida larga y saludable.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-danger text-center">
                Hospitalización cómoda
              </Card.Title>
              <Card.Text className="text-center">
                Tu mascota puede quedarse en nuestras instalaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <hr className="mt-5" />
      </Container>
      <CarouselCards></CarouselCards>
      <article>
        <Container>
          <hr />
          <CardGroup className="mt-5 mb-5">
            <Col md={4} ld={3} className="mb-3 px-3">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://www.snau.es/blog/wp-content/uploads/2019/03/cachorro-1.jpg"
                  alt="Cachorro"
                />
                <Card.Body>
                  <Card.Title>Plan primeros pasos</Card.Title>
                  <Card.Text>Servicios para mascotas de 0 a 5 años</Card.Text>
                  <Button variant="primary">Hacer consulta</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} ld={3} className="mb-3 px-3">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://1.bp.blogspot.com/-OLIPJNvqFTQ/V7Xl1mdOX8I/AAAAAAAABPw/ZffsOb8ptIQFUMFW34TEgwwUxvZOXaYxQCLcB/s1600/perromediano.jpg"
                  alt="Perro mediano"
                />
                <Card.Body>
                  <Card.Title>Plan Madurando</Card.Title>
                  <Card.Text>Servicios para mascotas de 5 a 10 años</Card.Text>
                  <Button variant="primary">Hacer consulta</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} ld={3} className="mb-3 px-3">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src="https://cdn.shopify.com/s/files/1/0081/7007/8272/files/perro-adulto_large.png?v=1573252556"
                  alt="Perro adulto"
                />
                <Card.Body>
                  <Card.Title>Plan adultos</Card.Title>
                  <Card.Text>
                    Servicios para mascotas de más de 10 años.
                  </Card.Text>
                  <Button variant="primary">Hacer consulta</Button>
                </Card.Body>
              </Card>
            </Col>
          </CardGroup>
        </Container>
      </article>
    </section>
  );
};

export default Inicio;
