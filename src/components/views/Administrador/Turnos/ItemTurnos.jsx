import React, { useEffect } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { borrarTurnos, obtenerTurnos } from '../../../helpers/queries';
import Swal from 'sweetalert2';

const ItemTurnos = ({turnos,setTurnos}) => {
  useEffect(()=>{
    obtenerTurnos().then((respuesta)=>{
      if(respuesta){
        setTurnos(respuesta)
      }else{
        Swal.fire('Ocurrio un error', 'Intente realizar esta operacion en unos minutos', 'error')
      }
    })
  },[])
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-1',
      cancelButton: 'btn btn-danger m-1'
    },
    buttonsStyling: false
  })

  const borrarTurno = () => {


swalWithBootstrapButtons.fire({
  title: '¿Seguro que desea eliminar el turno?',
  text: "una vez realizada esta operación, no podrá deshacer los cambios efectuados",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Borrar',
  cancelButtonText: 'Cancelar',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {

    borrarTurnos(turnos._id).then((respuesta) => { 
    if (respuesta && respuesta.status === 200) {
      swalWithBootstrapButtons.fire(
        'Eliminado!',
        'El turno ha sido eliminado correctamente',
        'success'
      )
      obtenerTurnos().then((respuesta) => {
        if (respuesta) {
          setTurnos(respuesta);
        }
      });
    } else {
      swalWithBootstrapButtons.fire(
        'Ocurrió un error',
        'El Turno no pudo ser eliminado',
        'error')} 
  })
    } else if (
    result.dismiss === Swal.DismissReason.cancel) {
    swalWithBootstrapButtons.fire(
      'Cancelado',
      'Los cambios realizados no se guardaron',
      'error'
    )}
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