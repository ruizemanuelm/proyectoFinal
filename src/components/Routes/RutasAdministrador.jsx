import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";
import EditarTurno from "../views/Administrador/Turnos/EditarTurno";

const RutasAdministrador = () => {
  return (
    <>
    <Routes>
        <Route
            exact
            path="/"
            element={<Admin></Admin>}
        ></Route>
        <Route 
        exact path='/editarturno/:id' 
        element={<EditarTurno/>}>
        </Route>
    </Routes>
    </>
  );
};

export default RutasAdministrador;
