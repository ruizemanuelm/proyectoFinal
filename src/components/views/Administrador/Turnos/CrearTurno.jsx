import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearTurno, obtenerFecha, obtenerHora } from "../../../helpers/queries";
import Swal from "sweetalert2";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const onSubmit = (nuevoTurno) => {
    
    if (nuevoTurno.veterinario && nuevoTurno.hora){

    }
    console.log(nuevoTurno);
    crearTurno(nuevoTurno).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Turno solicitado', `El turno fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Ocurrió un error', `El turno no pudo ser solicitado, intente nuevamente en unos minutos`, 'error');
      }
    })
  }

  obtenerFecha();
  obtenerHora();
  console.log(obtenerHora());
  console.log(obtenerFecha());
  
  const validacionFecha = () => {
    const fechaSeleccionada = getValues("fechaTurno");
    const fechaActual = obtenerFecha();

    
    if (fechaSeleccionada < fechaActual) {
      return "La fecha debe ser igual o posterior al día de hoy";
    }

    return true;
  };
  const validacionHora = () => {
    const horaSeleccionada = getValues("hora");
    const horaActual = obtenerHora();
    const horaMinima1 = "08:00";
    const horaMaxima1 = "12:00";
    const horaMinima2 = "14:00";
    const horaMaxima2 = "18:00";
    
    if (obtenerFecha() === getValues("fechaTurno")) {
      if (horaSeleccionada < horaActual) {
        return "La hora debe ser igual o posterior a la hora actual";
      } else {
        if (
          (horaSeleccionada >= horaMinima1 &&
            horaSeleccionada <= horaMaxima1) ||
          (horaSeleccionada >= horaMinima2 && horaSeleccionada <= horaMaxima2)
        ) {
          return true;
        } else {
          return "La hora debe estar entre las 08:00 y 12:00, o entre las 14:00 y 18:00.";
        }
      }    
    } else {
      if (
        (horaSeleccionada >= horaMinima1 &&
          horaSeleccionada <= horaMaxima1) ||
        (horaSeleccionada >= horaMinima2 && horaSeleccionada <= horaMaxima2)
      ) {
        return true;
      } else {
        return "La hora debe estar entre las 08:00 y 12:00, o entre las 14:00 y 18:00.";
      }
    }
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
                  value: 15,
                  message: "El nombre no debe exceder los 15 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombMascota?.message}
            </Form.Text>
          </Form.Group>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="fechaTurno">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                {...register("fechaTurno", {
                  required: "Este campo es obligatorio",
                  validate: validacionFecha,
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaTurno?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="hora">
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
                {...register("veterinario", {
                  required: "Seleccione una opción",
                })}
              >
                <option disabled value="">
                  Seleccione una opción
                </option>
                <option value="Juan Carlos">Juan Carlos</option>
                <option value="Maria Jose">Maria Jose</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.veterinario?.message}
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
            {...register("detalleCita", {
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
            {errors.detalleCita?.message}
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
