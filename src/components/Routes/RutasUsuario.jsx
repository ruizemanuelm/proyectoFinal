import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import PerfilUsuario from '../views/PerfilUsuario';
const RutasUsuario = () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
    return (
        <>
            <Routes>
            <Route exact path='/perfil' element={<PerfilUsuario usuarioLogueado={usuarioLogueado}/>}></Route>
            </Routes>
        </>
    );
};

export default RutasUsuario;