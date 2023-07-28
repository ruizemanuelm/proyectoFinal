import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { obtenerFecha, obtenerHora } from "../../../helpers/queries";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const onSubmit = (turno) => {
    console.log(turno);
  };

  obtenerFecha();
  obtenerHora();

  const validacionFecha = () => {
    const fechaSeleccionada = getValues("fecha");
    const fechaActual = obtenerFecha();

    if (fechaSeleccionada < fechaActual) {
      return "La fecha debe ser igual o posterior al día de hoy";
    }

    return true;
  };
  const validacionHora = () => {
    const horaSeleccionada = getValues("hora");
    const horaActual = obtenerHora(); 

    if (obtenerFecha() === getValues("fecha") ) {

      if (horaSeleccionada < horaActual) {
        return "La hora debe ser igual o posterior a la hora actual";
      }
    }

    return true;
  };

  return (
    <section className="container mainSection my-2">
      <h1 className="display-4 my-4">Nuevo Turno</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group className="mb-3" controlId="NombreMascota">
            <Form.Label>Nombre de la mascota</Form.Label>
            <Form.Control
              type="text"
              maxLength={16}
              placeholder="Firulais"
              {...register("nombMascota", {
                required: "El nombre es obligatorio",
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
              {errors.nombMascota?.message}
            </Form.Text>
          </Form.Group>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="fecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                {...register("fecha", {
                  required: "Este campo es obligatorio",
                  validate: validacionFecha,
                })}
              />
              <Form.Text className="text-danger">
                {errors.fecha?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="Hora">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                {...register("hora", {
                  required: "Este campo es obligatorio",
                  validate: validacionHora,
                })}
              />
              <Form.Text className="text-danger">
                {errors.hora?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="Veterinario">
              <Form.Label>Veterinario</Form.Label>
              <Form.Select
                {...register("vet", {
                  required: "Seleccione una opción",
                })}
              >
                <option disabled value="">
                  Seleccione una opción
                </option>
                <option value="Lucio">Lucio</option>
                <option value="Sebastian">Sebastian</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.vet?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="Detalle">
          <Form.Label>Detalle de la cita</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            maxLength={101}
            {...register("detalle", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 10,
                message: "El detalle debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "El detalle no debe exceder los 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.detalle?.message}
          </Form.Text>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default CrearTurno;
