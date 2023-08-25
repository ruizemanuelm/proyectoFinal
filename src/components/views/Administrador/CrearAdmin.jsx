import React from "react";
import { Button, Col, Row , Container, Form, Card, CardGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {registro } from "../../helpers/queries";

import Swal from "sweetalert2";

const CrearAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const Registro = (administrador)=>{
    registro(administrador).then((respuesta)=>{
      if(respuesta?.status===201){
        Swal.fire(
          'Se creo un usuario nuevo'
        )
        reset();
      }else{
        Swal.fire(
          'Ocurrió un error',
          'el email o contraseña es invalido'
        )
      }
    })
  }
  return (
    <section className="container-fluid mainSection my-4">
        <Container>
            <div className="text-center">
            <h1 className="display-6">Nuevo administrador</h1>
            </div>
      <Form onSubmit={handleSubmit(Registro)}>
     <Row>          <Form.Group className="mb-3" controlId="roll">
              <Form.Label>Rol</Form.Label>
              <Form.Select
                {...register("rol", {
                  required: "Seleccione un rol",
                })}
              >
                <option  defaultValue="admin">
                 Administrador
                </option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.rol?.message}
              </Form.Text>
            </Form.Group>
        <Form.Group className="my-3" controlId="emailForm">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@ejemplo.com"
            autoFocus
            {...register("email", {
              required: "El email es un dato obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                "El email debe tener un formato valido (mail@dominio.com)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
           </Row>
           <Row>
        <Col sm={12} md={6}>
        <Form.Group className="mb-3" controlId="namesForm">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre de usuario"
            autoFocus
            {...register("nombreUsuario", {
                required: "ingrese el nombre de usuario",
                pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/,
                    message: "ingrese el nombre de usuario",
                },
            })}
            />
          <Form.Text className="text-danger">
            {errors.nombreAdministrador?.message}
          </Form.Text>
        </Form.Group>
            </Col>
            <Col sm={12} md={6}>
        <Form.Group className="mb-3" controlId="passwordForm">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            rows={3}
            {...register("password", {
              required: "El password es un dato obligatorio",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message:
                  "El password debe contener entre 8 y 16 caracteres y debe incluir números, caracteres en mayúscula, minúscula y por lo menos un carácter especial",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        </Col>
        </Row>
        <Button variant="primary" className="mt-4 w-100" type="submit">
          Registrarse
        </Button>
      </Form>
<div className="text-center">
      <h2 className="fs-4 mt-5">Los privilegios como administrador incluyen:</h2>
</div>
      <CardGroup className="mt-4 mb-5">
          <Col className="mb-4" md={6} sm={12} lg={3}>
          <Card className="h-100 rounded-end-0">
            <Card.Body className="justify-content-center">
              <Card.Title className="text-color text-center">
              Gestión de Citas
              </Card.Title>
              <Card.Text className="text-center">
              Programar, modificar y cancelar citas, asignando fechas y horas, y mantener actualizados los registros de citas programadas.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="mb-4" md={6} sm={12} lg={3}>
          <Card className="h-100 rounded-0">
            <Card.Body>
              <Card.Title className="text-color text-center">
              Acceso a la Base de Datos
              </Card.Title>
              <Card.Text className="text-center">
              Acceder y actualizar información de pacientes, incluyendo datos médicos, historiales de tratamientos y vacunas.              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="mb-4" md={6} sm={12} lg={3}>
          <Card className="h-100 rounded-0">
            <Card.Body>
              <Card.Title className="text-color text-center">
              Comunicación con Clientes
              </Card.Title>
              <Card.Text className="text-center">
              Responsable de confirmar citas, recordar visitas futuras y responder a preguntas de clientes sobre horarios y procedimientos.              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="mb-4" md={6} sm={12} lg={3}>
          <Card className="h-100 rounded-start-0">
            <Card.Body>
              <Card.Title className="text-color text-center">
              Reservas de Emergencia
              </Card.Title>
              <Card.Text className="text-center">
              Autoridad para gestionar citas de emergencia y priorizar atención médica en situaciones críticas.              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </CardGroup>

            </Container>
    </section>
  );
};

export default CrearAdmin;
