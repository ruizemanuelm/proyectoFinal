import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import EditarPaciente from "../views/Administrador/pacientes/EditarPaciente";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Admin></Admin>}></Route>
        <Route
          exact
          path="/editar-paciente/:id"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
