import { Routes, Route } from "react-router-dom";
import Admin from "../views/Admin";


const RutasAdministrador = () => {
  return (
    <>
    <Routes>
        <Route
            exact
            path="/"
            element={<Admin></Admin>}
        ></Route>
    </Routes>
    </>
  );
};

export default RutasAdministrador;
