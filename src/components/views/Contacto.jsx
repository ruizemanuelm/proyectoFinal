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
import { BsWhatsapp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm();

  const onSubmit = (validar) => {
    getValues();
  };

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
              <h1 className="text-center mb-4">Contáctenos</h1>
              <Row>
                <Col md={6}>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mt-3" controlId="formName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        {...register("nombreContacto", {
                          required: "Por favor ingrese su nombre.",
                          minLength: {
                            value: 2,
                            message: "Debe contener al menos 2 caracteres.",
                          },
                          maxLength: {
                            value: 40,
                            message: "Debe contener como maximo 40 caracteres",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.nombreComentario?.message}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingresa tu email"
                        {...register("emailContacto", {
                          required: "Por favor ingrese su email.",
                          minLength: {
                            value: 6,
                            message: "Debe contener al menos 6 caracteres.",
                          },
                          maxLength: {
                            value: 60,
                            message: "Debe contener como maximo 60 caracteres",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.emailContacto?.message}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mt-3" controlId="formMessage">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Escribe tu mensaje"
                        {...register("mensajeContacto", {
                          required:
                            "Por favor cuentenos acerca de su problema.",
                          minLength: {
                            value: 2,
                            message: "Debe contener al menos 2 caracteres.",
                          },
                          maxLength: {
                            value: 200,
                            message: "Debe contener como maximo 200 caracteres",
                          },
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.mensajeContacto?.message}
                      </Form.Text>
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
                  <Card className="info-box mt-5 border-0">
                    <Card.Body>
                      <h4 className="mb-4"> Información de contacto</h4>
                      <p className="mt-4">
                        <FaLocationDot className="fs-2 text-color" /> General
                        Paz 556
                        <br />
                      </p>
                      <a href="https://wa.me/3816422895" className="mt-4">
                        <BsWhatsapp className="text-color fs-2" /> Envíanos un
                        WhatsApp
                        <br />
                      </a>
                      <p className="mt-4">
                        <BiTime className="fs-1 text-color" /> Lunes a Viernes,
                        9:00 - 12:00 & 14:00 - 18:00
                        <br />
                      </p>
                      <p className="mt-4">
                        <TbMailFilled className="fs-2 text-color" />{" "}
                        info@huellitas.com
                      </p>
                      <a href=""></a>
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
