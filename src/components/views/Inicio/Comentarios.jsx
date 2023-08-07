import React from "react";
import { Form, Container, Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearComentario } from "../../helpers/queries";
import Swal from "sweetalert2";


const Comentarios = ({usuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (comentarioNuevo) => {
    console.log(comentarioNuevo);
    crearComentario(comentarioNuevo).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Comentario creado', `El comentario fue publicado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Oops! Ocurrio un error', `El comentario no fue publicado correctamente, intente nuevamente mas tarde`, 'error');
      }
    })
  }

  return (
    <>
      <Container className="mb-5">
        <hr />
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)} 
            className="mt-5 mb-5">
              <h5 className="mb-4">{usuarioLogueado.email}</h5>
              <Form.Group controlId="formComentario">
                <Form.Control
                  as="textarea"
                  placeholder="Escribe un comentario"
                  {...register('contenidoComentario', {
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
