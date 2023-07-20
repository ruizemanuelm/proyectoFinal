import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const CrearTurno = () => {
    return (
        <section className="container mainSection my-2">
        <h1 className="display-4 my-4">Nuevo Turno</h1>
        <Form>
            <Row>
        <Col sm={12} md={4}>
          <Form.Group className="mb-3" controlId="Fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
            </Col>
            <Col sm={12} md={4}>
          <Form.Group  className="mb-3" controlId="Hora">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time"/>
          </Form.Group>
            </Col>
            <Col sm={12} md={4}>
            <Form.Group className="mb-3" controlId="Veterinario">
              <Form.Label>Veterinario</Form.Label>
              <Form.Select defaultValue="Lucio">
                <option value="Lucio">Lucio</option>
                <option value="Sebastian">Sebastian</option>
              </Form.Select>
            </Form.Group>
            </Col>
            </Row>
            <Form.Group className="mb-3" controlId="Detalle">
              <Form.Label>Detalle de la cita</Form.Label>
              <Form.Control as="textarea" type="text" />
            </Form.Group>
          <Button className='w-100' variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    );
};

export default CrearTurno;