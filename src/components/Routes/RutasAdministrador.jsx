import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import EditarTurno from "../views/Administrador/Turnos/EditarTurno";
import EditarPaciente from "../views/Administrador/pacientes/EditarPaciente";
import CrearPaciente from "../views/Administrador/pacientes/CrearPaciente";
import { useState } from "react";
import CrearAdmin from "../views/Administrador/CrearAdmin";

const RutasAdministrador = () => {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Admin usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} ></Admin>}></Route>
        <Route exact path='/crearpaciente' element={<CrearPaciente/>}></Route>
        <Route exact path='/crearAdmin' element={<CrearAdmin/>}></Route>
        <Route exact path="/editar-paciente/:id" element={<EditarPaciente></EditarPaciente>}></Route>
        <Route exact path='/editarturno/:id' element={<EditarTurno/>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
