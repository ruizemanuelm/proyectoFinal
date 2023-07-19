import React, { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";
import { Eye, PencilFill, TrashFill } from "react-bootstrap-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ItemPacientes = () => {
  const BotonEditar = (props) => (
    <Tooltip id="botonEditar" {...props}>
      Editar
    </Tooltip>
  );
  const BotonEliminar = (props) => (
    <Tooltip id="botonEliminar" {...props}>
      Eliminar
    </Tooltip>
  );
  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
      <tr>
        <td>1</td>
        <td>Emanuel Ruiz</td>
        <td>Ruiz</td>
        <td>Ruizemanuelok@gmail.com</td>
        <td>3813153665</td>
        <td>24 de septiembre 129</td>
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
          <Button className="m-1" variant="success">
            <PencilFill />
          </Button>
          </OverlayTrigger>
          <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={BotonEliminar}
    >
          <Button className="m-1" variant="danger">
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
          <ListGroup as="ol">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto fs-3">
                <div className="fw-bold fs-4 text-danger">Nombre:</div>
                Meijas
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto fs-3">
                <div className="fw-bold fs-4 text-danger">Especie:</div>
                Perro
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto fs-3">
                <div className="fw-bold fs-4 text-danger">Raza:</div>
                Hamilton
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemPacientes;
