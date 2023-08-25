import React from 'react';
import { Navigate } from 'react-router';

const RutasProtegidasUser = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
        
        if(!usuarioLogueado || usuarioLogueado.rol=="Administrador"){
        return <Navigate to={'/'}></Navigate>
        }else{
        return children;
        }
    };

export default RutasProtegidasUser;