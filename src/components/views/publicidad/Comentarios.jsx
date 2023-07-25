import React from "react";
import { Form, Container, Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Comentarios = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <Container className="mb-5">
        <hr />
        <Row>
          <Col className="mt-5" md={2}>
            <Card>
              <Card.Img src="https://junkmailimages.blob.core.windows.net/large/fa685acad3d44539bd3d0ffba39c913b.jpg"></Card.Img>
            </Card>
          </Col>
          <Col>
            <Form onSubmit={handleSubmit} className="mt-5">
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Control
                  placeholder="Escribe tu nombre"
                  {...register('nombre', {
                    required: "Por favor escribe tu nombre.",
                    minLength: {
                      value: 2,
                      message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                      value: 500,
                      message: "La cantidad maxima de caracteres es de 500 digitos",
                    },
                  })}
                  rows={3}
                />
                <Form.Text className="text-danger">
                  {errors.nombre?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formComentario">
                <Form.Control
                  as="textarea"
                  placeholder="Escribe un comentario"
                  {...register('comentario', {
                    required: "Por favor escribe algo.",
                    minLength: {
                      value: 2,
                      message: "La cantidad minima de caracteres es de 2 digitos",
                    },
                    maxLength: {
                      value: 500,
                      message: "La cantidad maxima de caracteres es de 500 digitos",
                    },
                  })}
                  rows={3}
                />
                <Form.Text className="text-danger">
                  {errors.comentario?.message}
                </Form.Text>
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit">
                Enviar comentario
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Comentarios;
