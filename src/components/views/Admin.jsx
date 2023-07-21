import React from "react";
import Tab from "react-bootstrap/Tab";
import { Tabs, Card, Table, Col, Row, ListGroup } from "react-bootstrap";
import ItemAdmin from "./Administrador/ItemAdmin";
import AdminPacientes from "./Administrador/AdminPacientes";
import AdminTurnos from "./Administrador/AdminTurnos";
const Admin = () => {
  return (
    <section className="container-fluid mainSection">
      <Tabs
        defaultActiveKey="Inicio"
        id="AdminGeneral"
        className="mb-3"
        fill
        variant="underline"
      >
        <Tab eventKey="Inicio" title="Inicio">
          <Card className="bg-primary-subtle">
            <Card.Header className="display-6">Bienvenido</Card.Header>
            <Card.Body>
              <Card.Title className="fs-3 text-center">
                Turnos del dia
              </Card.Title>
              <Table className="my-3" responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Horario</th>
                    <th>Paciente</th>
                    <th>Dueño</th>
                    <th>Detalle de la consulta</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <ItemAdmin></ItemAdmin>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="Perfil" title="Perfil">
          <Card className="bg-dark-subtle">
            <Card.Header className="display-6">Nombre del Admin</Card.Header>
            <Card.Body className="">
              <Row>
                <Col className="mx-1" sm={12} md={4}>
                  <Card.Img
                    className="rounded-5"
                    variant="top"
                    src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg"
                  />
                </Col>
                <Col sm={12} md={6}>
                  <ListGroup variant="flush" className="align-content-center">
                    <p className="fs-4 mt-3">Nombre de usuario</p>
                    <ListGroup.Item
                      action
                      variant="primary"
                      className="fs-3 rounded-3"
                    >
                      User123
                    </ListGroup.Item>
                    <p className="fs-4 mt-3">Correo</p>
                    <ListGroup.Item
                      action
                      variant="danger"
                      className="fs-3 rounded-3"
                    >
                      User123@mail.com
                    </ListGroup.Item>
                    <p className="fs-4 mt-3">Contraseña</p>
                    <ListGroup.Item
                      action
                      variant="warning"
                      className="fs-3 rounded-3"
                    >
                      12345678
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="Pacientes" title="Pacientes">
        <Card className="bg-danger-subtle">
<AdminPacientes></AdminPacientes>
        </Card>
        </Tab>
        <Tab eventKey="Turnos" title="Turnos">
        <Card className="bg-success-subtle">
<AdminTurnos></AdminTurnos>
        </Card>
          </Tab>
      </Tabs>
    </section>
  );
};

export default Admin;
