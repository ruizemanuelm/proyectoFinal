import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearPacientes } from "../../../helpers/queries";
import Swal from "sweetalert2";


const CrearPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (pacienteNuevo) => {
    console.log(pacienteNuevo);
    crearPacientes(pacienteNuevo).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Paciente creado', `El paciente fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Oops! Ocurrio un error', `El paciente no fue creado correctamente, intente nuevamente mas tarde`, 'error');
      }
    })
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo paciente</h1>
      <hr />
      <h2>Información del dueño</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="NombreDueño">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                minLength={2}
                maxLength={51}
                placeholder="Ej: Leo"
                {...register("nombreDueno", {
                  required: "este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre no debe exceder los 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreDueno?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="ApellidoDueño">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                minLength={2}
                maxLength={51}
                placeholder="Ej: Messi"
                {...register("apellidoDueno", {
                  required: "este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El apellido debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "El apellido no debe exceder los 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.apellidoDueno?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Huellitas@mail.com"
                {...register("email", {
                  required: "este campo es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El mail debe tener un formato valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="Telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                placeholder="3812233445"
                {...register("telefono", {
                  required: "este campo es obligatorio",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "El teléfono es inválido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="Direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                maxLength={61}
                minLength={2}
                {...register("direccion", {
                  required: "este campo es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La dirección debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message: "La dirección no debe exceder los 60 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.direccion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <hr />
        <h2>Información de mascota</h2>
        <Form.Group className="mb-3" controlId="NombreMascota">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            maxLength={16}
            placeholder="Firulais"
            {...register("nombreMascota", {
              required: "este campo es obligatorio",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 10,
                message: "El nombre no debe exceder los 15 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreMascota?.message}
          </Form.Text>
        </Form.Group>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="Especie">
              <Form.Label>Especie</Form.Label>
              <Form.Select
                {...register("especie", {
                  required: "Seleccione una especie",
                })}
              >
                <option disabled value="">
                  Seleccione una opción
                </option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Conejo">Conejo</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.especie?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="Raza">
              <Form.Label>Raza</Form.Label>
              <Form.Control
                type="text"
                {...register("raza", {
                  required: "Este campo es obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.raza?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mb-3">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearPaciente;
