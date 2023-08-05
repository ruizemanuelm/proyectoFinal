import React, { useEffect, useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";
import { Eye, PencilFill, TrashFill } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { borrarPaciente, obtenerPacientes } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemPacientes = ({ paciente, setPaciente }) => {
  const eliminarPaciente = () => {
    borrarPaciente(paciente._id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          `El producto fue eliminado correctamente`,
          "success"
        );
        obtenerPacientes().then((respuesta) => {
          if (respuesta) {
            setPaciente(respuesta);
          }
        });
      } else {
        Swal.fire(
          "No se pudo eliminar",
          `El producto no fue eliminado correctamente`,
          "error"
        );
      }
    });
  };
  const BotonEditar = (props) => (
    <Tooltip id="botonEditar" {...props}>
      Editar
    </Tooltip>
  );

  const BotonEliminar = (props) => (
    <Tooltip id="botonEditar" {...props}>
      Eliminar
    </Tooltip>
  );

  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
      <tr>
        <td>{paciente._id}</td>
        <td>{paciente.nombreDueno}</td>
        <td>{paciente.apellidoDueno}</td>
        <td>{paciente.email}</td>
        <td>{paciente.telefono}</td>
        <td>{paciente.direccion}</td>
        <td className="text-center">
          <Button onClick={() => setShowModal(true)} variant="info">
            <Eye />
          </Button>
        </td>
        <td className="text-center ">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={BotonEditar}
          >
            <Button
              className="m-1"
              variant="success"
              as={Link}
              to={"/admin/editar-paciente/"+paciente._id}
            >
              <PencilFill />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={BotonEliminar}
          >
            <Button className="m-1" variant="danger" onClick={eliminarPaciente}>
              <TrashFill />
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
      <Modal
        show={ShowModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Información de mascota
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush" className="align-content-center">
            <ListGroup.Item
              action
              active
              variant="primary"
              className="fs-2 text-center"
            >
              Nombre
            </ListGroup.Item>
            <ListGroup.Item action variant="primary" className="fs-3">
              {paciente.nombreMascota}
            </ListGroup.Item>
            <ListGroup.Item
              action
              active
              variant="danger"
              className="fs-2 mt-3 text-center"
            >
              Especie
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" className="fs-3">
              {paciente.especie}
            </ListGroup.Item>
            <ListGroup.Item
              action
              active
              variant="warning"
              className="fs-2  mt-3 text-center"
            >
              Raza
            </ListGroup.Item>
            <ListGroup.Item action variant="warning" className="fs-3">
              {paciente.raza}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemPacientes;
