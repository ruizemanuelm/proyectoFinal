import React from 'react';

import {
    Container,
    Col,
    Card,
    Button,
    Row,
    Form
  } from "react-bootstrap";

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        {/* <Row>
        <Col md={6}>
        <Form onSubmit={this.handleSubmit}>
              <Form.Group className='mt-4'>
                <Form.Control
                  type="tel"
                  name="number"
                  placeholder="Numero en la tarjeta"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}

                />
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nombre en la tarjeta"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}

                />
              </Form.Group>
              <Row>
                <Col xs={6}>
                  <Form.Group className='mt-3'>
                    <Form.Control
                      type="number"
                      name="expiry"
                      placeholder="Vencimiento"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}

                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className='mt-3'>
                    <Form.Control
                      type="number"
                      name="cvc"
                      placeholder="Codigo"
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button className='mt-3' type="submit">Suscribirse</Button>
            </Form>
        </Col>
        <Col className='mt-4' md={6}>
        <Card
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        </Col>
        </Row> */}
      </div>
    );
  }
}