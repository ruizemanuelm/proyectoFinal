import React from 'react';
import Tab from 'react-bootstrap/Tab';
import {Tabs, Card, Table} from 'react-bootstrap';

const Admin = () => {
    return (
        <section className='container mainSection'>
                <Tabs
      defaultActiveKey="profile"
      id="AdminGeneral"
      className="mb-3"
      fill
      variant="underline"
    >
      <Tab eventKey="Inicio" title="Inicio">
      <Card>
      <Card.Header>Bienvenido</Card.Header>
      <Card.Body>
        <Card.Title>Turnos del dia</Card.Title>
        <Card.Text>

        </Card.Text>
        <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Horario</th>
            <th>Paciente</th>
            <th>Dueño</th>
            <th>Detalle de la consulta</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
      </Card.Body>
    </Card>
          </Tab>
      <Tab eventKey="Perfil" title="Perfil">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Pacientes" title="Pacientes">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="Turnos" title="Turnos" >
        Tab content for Contact
      </Tab>
    </Tabs>
        </section>
    );
};

export default Admin;