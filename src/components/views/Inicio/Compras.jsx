import React from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";


const Compras = () => {
    return (
        <div>
        <Row>
        <Col md={12}>
        <Form>
              <Form.Group className='mt-4'>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Numero en la tarjeta"

                />
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nombre en la tarjeta"

                />
              </Form.Group>
              <Row>
                <Col xs={12}>
                  <Form.Group className='mt-3 d-flex'>
                    <Form.Control
                      type="number"
                      name="expiry"
                      placeholder="Vencimiento"
                    />
                    <Form.Control
                      className='ms-2'
                      type="number"
                      name="cvc"
                      placeholder="Codigo"
                    />
                  </Form.Group>
                </Col>
                <Col xs={10}>
                  <Form.Group className='mt-3'>
                  </Form.Group>
                </Col>
              </Row>
              <Button className='mt-3 w-100' type="submit">Suscribirse</Button>
            </Form>
        </Col>
        </Row>
      </div>
    );
};

export default Compras;