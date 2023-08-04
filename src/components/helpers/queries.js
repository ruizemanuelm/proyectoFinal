const URL_usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_turnos = import.meta.env.VITE_API_TURNOS;

export const editarTurno = async (turno,id) => {
    try {
        const respuesta = await fetch(URL_turnos+'/'+id, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(turno)
        });

        return respuesta;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerUnTurno = async (id)=>{
    try{
        console.log(id)
        const respuesta = await fetch(URL_turnos+'/'+id);
        const turno = await respuesta.json();
        return turno;
    }catch (error){
        console.log(error)
    }
}
export const crearTurno = async (turno)=>{
    try{
        const respuesta = await fetch(URL_turnos,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(turno)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const obtenerTurnos = async ()=>{
    try{
        const respuesta = await fetch(URL_turnos);
        const listaDeturnos = await respuesta.json();
        return listaDeturnos;
    }catch (error){
        console.log(error)
    }
}

export const obtenerFecha = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    const fechaActual = `${year}-${month}-${day}`;
return fechaActual
}

export const obtenerHora = () => {
    const fecha = new Date();
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const horaActual = `${hora}:${minutos}`;
    return horaActual
  };

export const login = async (user)=>{
    try{
        const respuesta = await fetch(URL_usuarios+'login',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        const usuario = await respuesta.json();
        return {
            status: respuesta.status,
            mensaje: usuario.mensaje,
            nombreUsuario: usuario.nombreUsuario
        }
        
    }catch(error){
        console.log(error)
    }
}
export const register = async (user)=>{
    try{
        const respuesta = await fetch(URL_usuarios+'register',{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        const usuario = await respuesta.json();
        return {
            status: respuesta.status,
            mensaje: usuario.mensaje,
        }
        
    }catch(error){
        console.log(error)
    }
}

