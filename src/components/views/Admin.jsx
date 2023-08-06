import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import { Tabs, Card, Table, Col, Row, ListGroup,CardGroup } from "react-bootstrap";
import ItemAdmin from "./Administrador/ItemAdmin";
import AdminPacientes from "./Administrador/AdminPacientes";
import AdminTurnos from "./Administrador/AdminTurnos";
import { obtenerTurnos } from "../helpers/queries";


const Admin = ({usuarioLogueado}) => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'tabla1');
  const [turnos, setTurnos] = useState([]);

useEffect(()=>{
  obtenerTurnos().then((respuesta)=>{
    if(respuesta){
      setTurnos(respuesta)
    }else{
      Swal.fire('Ocurrio un error', 'Intente realizar esta operacion en unos minutos', 'error')
    }
  })
},[])
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
    localStorage.setItem('activeTab', selectedTab);
  };

  return (
    <section className="container-fluid mainSection my-3">
      <Tabs
        activeKey={activeTab} 
        onSelect={handleTabSelect}
        id="AdminGeneral"
        className="mb-3"
        fill
        variant="underline"
      >
        <Tab eventKey="Inicio" title="Inicio">
          <Card className="bg-primary-subtle">
            <Card.Header className="display-6">Bienvenido</Card.Header>
            <Card.Body>
                  <CardGroup>
                  {turnos.map((turnos)=><ItemAdmin turnos={turnos} key={turnos._id} setTurnos={setTurnos}></ItemAdmin>)}
    </CardGroup>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="Perfil" title="Perfil">
          <Card className="bg-dark-subtle">
            <Card.Header className="display-6">Bienvenido {usuarioLogueado?.nombreUsuario}</Card.Header>
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
                      {usuarioLogueado?.nombreUsuario}
                    </ListGroup.Item>
                    <p className="fs-4 mt-3">Correo</p>
                    <ListGroup.Item
                      action
                      variant="danger"
                      className="fs-3 rounded-3"
                    >
                      {usuarioLogueado?.email}
                    </ListGroup.Item>
                    <p className="fs-4 mt-3">Contraseña</p>
                    <ListGroup.Item
                      action
                      variant="warning"
                      className="fs-3 rounded-3"
                    >
                      {usuarioLogueado?.password}
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
