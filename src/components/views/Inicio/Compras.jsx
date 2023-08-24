import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Compras = () => {
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
    <div>
      <Row>
        <Col md={12}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mt-4">
              <Form.Control
                type="number"
                name="number"
                placeholder="Numero en la tarjeta"
                {...register("numeroTarjeta", {
                  required: "El numero de la tarjeta es obligatorio",
                  minLength: {
                    value: 16,
                    message: "La tarjeta debe contener 16 numeros",
                  },
                  maxLength: {
                    value: 19,
                    message: "La tarjeta no debe exceder los 19 numeros",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numeroTarjeta?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre en la tarjeta"
                {...register("nombreTarjeta", {
                  required: "Escriba el nombre como aparece en la tarjeta",
                  minLength: {
                    value: 1,
                    message: "La tarjeta debe contener 16 numeros",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre no debe exceder los 20 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreTarjeta?.message}
              </Form.Text>
            </Form.Group>
            <Row>
              <Col xs={12}>
                <Form.Group className="mt-3 d-flex">
                  <Form.Control
                    type="date"
                    name="expiry"
                    placeholder="Vencimiento"
                    {...register("fechaVencimientoTarjeta", {
                      required: "Escriba la fecha como aparece en la tarjeta",
                      validate: {
                        value: 4,
                        message: "Escriba una fecha valida",
                      },
                      maxLength: {
                        value: 10,
                        message: "La fecha debe contener 8 caracteres",
                      },
                    })}
                  />
                  <Form.Control
                    className="ms-2"
                    type="number"
                    name="cvc"
                    placeholder="Codigo"
                    {...register("cvcTarjeta", {
                        required: "Escriba el codigo como aparece en la tarjeta",
                        validate: {
                            value: 4,
                            message: "Escriba un codigo valido",
                        },
                        maxLength: {
                            value: 4,
                            message:
                          "El codigo debe contener 4 caracteres como maximo",
                        },
                    })}
                  />
                    <Form.Text className="text-danger">
                      {errors.fechaVencimientoTarjeta?.message}
                    </Form.Text>
                  <Form.Text className="text-danger ms-5">
                    {errors.cvcTarjeta?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Button className="mt-3 w-100" type="submit">
              Suscribirse
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Compras;
