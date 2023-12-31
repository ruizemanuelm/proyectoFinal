import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    
    if(!usuarioLogueado || usuarioLogueado.rol=="Usuario"){
    return <Navigate to={'/'}></Navigate>
    }else{
    return children;
    }
};

export default RutasProtegidas;