import React, { useState } from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearComentario } from "../../helpers/queries";
import Swal from "sweetalert2";

const Comentarios = ({ usuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (comentarioNuevo) => {
    console.log(comentarioNuevo);
    crearComentario(comentarioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Comentario creado",
          `El comentario fue publicado correctamente`,
          "success"
        );
        reset();
        location.reload();
      } else {
        Swal.fire(
          "Oops! Ocurrió un error",
          `El comentario no fue publicado correctamente, intente nuevamente mas tarde`,
          "error"
        );
      }
    });
  };

  const evaluacionRef = React.useRef(null);
  return (
    <>
      <Container className="mb-5">
        <h2 className="text-center">Dejanos una reseña</h2>
        <hr />
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-5">
              <Form.Group controlId="formComentario">
                <Form.Control
                  type="name"
                  placeholder="Escribe tu nombre"
                  {...register("nombre", {
                    required: "Por favor escribe tu nombre.",
                    minLength: {
                      value: 2,
                      message: "La cantidad minima de caracteres es de dos",
                    },
                    maxLength: {
                      value: 500,
                      message: "La cantidad maxima de caracteres es de 40",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombre?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formComentario" className="mt-3">
                <Form.Control
                  as="textarea"
                  placeholder="Escribe un comentario"
                  {...register("contenidoComentario", {
                    required: "Por favor escribe algo.",
                    minLength: {
                      value: 2,
                      message:
                        "La cantidad minima de caracteres es de 2 dígitos",
                    },
                    maxLength: {
                      value: 500,
                      message:
                        "La cantidad maxima de caracteres es de 500 dígitos",
                    },
                  })}
                  rows={3}
                />
                <Form.Text className="text-danger">
                  {errors.contenidoComentario?.message}
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
