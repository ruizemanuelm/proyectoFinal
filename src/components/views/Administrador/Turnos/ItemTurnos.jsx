import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const ItemTurnos = () => {
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
      return (
        <>
          <tr>
            <td>21/07</td>
            <td>12:00</td>
            <td>Algún detalle</td>
            <td>Lucio</td>
            <td>Firulais</td>
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
        </>
    );
};

export default ItemTurnos;