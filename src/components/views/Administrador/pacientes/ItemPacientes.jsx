import React, { useState } from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

const ItemPacientes = () => {
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
            🐶
          </Button>
        </td>
        <td className="text-center ">
          <Button className="m-1" variant="success">
            Editar
          </Button>
          <Button className="m-1" variant="danger">
            Borrar
          </Button>
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
