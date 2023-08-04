import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { borrarTurnos } from '../../../helpers/queries';
import Swal from 'sweetalert2';

const ItemTurnos = ({turnos,setTurnos}) => {
  const borrarTurno = () => {
    borrarTurnos(turnos._id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Turno eliminado",
          `El Turno fue eliminado correctamente`,
          "success"
        );
        //recargar la tabla
        obtenerTurnos().then((respuesta) => {
          if (respuesta) {
            setTurnos(respuesta);
          }
        });
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El Turno no pudo ser eliminado`,
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
        <Tooltip id="botonEliminar" {...props}>
          Eliminar
        </Tooltip>
      );
      return (
        <>
          <tr>
            <td>{turnos.fechaTurno}</td>
            <td>{turnos.hora}</td>
            <td>{turnos.detalleCita}</td>
            <td>{turnos.veterinario}</td>
            <td>{turnos.nombMascota}</td>
            <td className="text-center ">
            <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={BotonEditar}
        >
              <Link className="m-1 btn btn-success"  to={'/admin/editarturno/'+turnos._id}>
                <PencilFill />
              </Link>
              </OverlayTrigger>
              <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={BotonEliminar}
        >
              <Button className="m-1" variant="danger" onClick={borrarTurno}>
                <TrashFill />
              </Button>
              </OverlayTrigger>
            </td>
          </tr>
        </>
    );
};

export default ItemTurnos;