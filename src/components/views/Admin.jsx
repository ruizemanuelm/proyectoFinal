import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import {
  Tabs,
  Card,
  Table,
  Col,
  Row,
  ListGroup,
  CardGroup,
  Pagination,
} from "react-bootstrap";
import ItemAdmin from "./Administrador/ItemAdmin";
import AdminPacientes from "./Administrador/AdminPacientes";
import AdminTurnos from "./Administrador/AdminTurnos";
import { compararHorasFecha, obtenerTurnos } from "../helpers/queries";
import { Link } from "react-router-dom";
const Admin = ({ usuarioLogueado }) => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "tabla1"
  );
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    obtenerTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Intente realizar esta operación en unos minutos",
          "error"
        );
      }
    });
  }, []);
  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
    localStorage.setItem("activeTab", selectedTab);
  };
  turnos.sort(compararHorasFecha);

  const ItemsPorPag = 3;
  const [PagActual, setPagActual] = useState(1);
  const UltimoIndice = PagActual * ItemsPorPag;
  const primerIndice = UltimoIndice - ItemsPorPag;
  const turnosOrdenados = turnos.slice(primerIndice, UltimoIndice);
  const paginate = (numeroDePag) => setPagActual(numeroDePag);
  const Pagination = ({ itemPorPaginas, totalItems, PagActual, paginate }) => {
    const numeroDePaginas = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemPorPaginas); i++) {
      numeroDePaginas.push(i);
    }
    return (
      <nav>
        <ul className="pagination">
          {numeroDePaginas.map((num) => (
            <li key={num} className="page-item">
              <a
                onClick={() => paginate(num)}
                href="#!"
                className={num === PagActual ? "page-link active" : "page-link"}
              >
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
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
                {turnosOrdenados.map((turnos) => (
                  <ItemAdmin
                    turnos={turnos}
                    key={turnos._id}
                    setTurnos={setTurnos}
                  ></ItemAdmin>
                ))}
              </CardGroup>
            </Card.Body>
            <div className="d-flex justify-content-center">
              <Pagination
                itemPorPaginas={ItemsPorPag}
                totalItems={turnos.length}
                PagActual={PagActual}
                paginate={paginate}
              />
            </div>
          </Card>
        </Tab>
        <Tab eventKey="Perfil" title="Perfil">
          <Card className="bg-dark-subtle">
            <Card.Header className="display-6 d-flex justify-content-between">
              Bienvenido {usuarioLogueado?.nombreUsuario} 
              <div>
              <Link className="btn btn-primary" to="/admin/crearAdmin">
          Nuevo admin
        </Link>
              </div>
            </Card.Header>
            <Card.Body className="">
              <Row>
                <Col className="mx-1" sm={12} md={4}>
                  <Card.Img
                    className="rounded-5 w-75"
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
