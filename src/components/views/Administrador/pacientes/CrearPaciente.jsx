import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const CrearPaciente = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo paciente</h1>
      <hr />
      <h2>Información del dueño</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="NombreDueño">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ej: Leo" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="ApellidoDueño">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ej: Messi" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" placeholder="Huellitas@mail.com" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="3812233445" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="Direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <hr />
        <h2>Información de mascota</h2>
        <Form.Group className="mb-3" controlId="NombreMascota">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Firulais" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="Especie">
            <Form.Label>Especie</Form.Label>
            <Form.Select defaultValue="Perro">
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="Conejo">Conejo</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="Raza">
            <Form.Label>Raza</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearPaciente;
