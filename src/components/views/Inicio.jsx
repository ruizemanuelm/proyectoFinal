import {
    Container,
    Col,
    Card,
    CardGroup,
    Carousel,
    Button,
  } from "react-bootstrap";

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
        </section>
    );
};

export default Inicio;