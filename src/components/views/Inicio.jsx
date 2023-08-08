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
import CarouselCards from "./Inicio/CarouselCards";
import CardsPlanes from "./Inicio/CardsPlanes";
import CardsOfertas from "./Inicio/CardsOfertas";
import CardsVeterinarios from "./Inicio/CardsVeterinarios";
import Comentarios from "./Inicio/Comentarios";
import ItemComentario from "./Inicio/ItemComentario";




const Inicio = ({usuarioLogueado}) => {

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
              <Card.Title className="text-color text-center">
                Atencion online
              </Card.Title>
              <Card.Text className="text-center">
                Garantizamos la mejor atencion.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-color text-center">
                Atencion personalizada a domicilio
              </Card.Title>
              <Card.Text className="text-center">
                Rapida atencion en casos de urgencia.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-color text-center">
                Salud preventiva
              </Card.Title>
              <Card.Text className="text-center">
                La prevención es la clave para una vida larga y saludable.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-color text-center">
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
        <CardsPlanes></CardsPlanes>
      <CarouselCards></CarouselCards>
      <CardsOfertas></CardsOfertas>
      <CardsVeterinarios></CardsVeterinarios>
      <Comentarios usuarioLogueado={usuarioLogueado}></Comentarios>
      <ItemComentario usuarioLogueado={usuarioLogueado}></ItemComentario>
    </section>
  );
};

export default Inicio;
