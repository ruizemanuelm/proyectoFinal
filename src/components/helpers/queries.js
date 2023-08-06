const URL_usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_turnos = import.meta.env.VITE_API_TURNOS;
const URL_pacientes = import.meta.env.VITE_API_PACIENTES;
const URL_comentarios = import.meta.env.VITE_API_COMENTARIOS;

export const borrarTurnos = async (id)=>{
    try{
        const respuesta = await fetch(URL_turnos+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}
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
        const respuesta = await fetch(URL_usuarios+'/login',{
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
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            password: usuario.password,
            token: usuario.token
        }
        
    }catch(error){
        console.log(error)
    }
}
export const register = async (user)=>{
    try{
        const respuesta = await fetch(URL_usuarios+'/register',{
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

export const obtenerPacientePorId = async (_id)=> {
    try{
        const respuesta = await fetch(URL_pacientes+'/'+_id);
        const paciente = await respuesta.json();
        return paciente;
    }catch{
        console.log(error)
    }

}


export const obtenerPacientes = async ()=> {
    try{
        const respuesta = await fetch(URL_pacientes);
        const listaPacientes = await respuesta.json();
        return listaPacientes;
    }catch{
        console.log(error)
    }

}


export const crearPacientes = async (pacientes) => {
    try {
      const respuesta = await fetch(URL_pacientes, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
        },
        body: JSON.stringify(pacientes)
      });
      
      return respuesta;
    } catch(error){
      console.log(error);
    }
  };
  
  
export const borrarPaciente = async (id)=> {
    try{
        const respuesta = await fetch(URL_pacientes+'/'+id,{
            method: "DELETE"
        });
        window.location.reload();
        return respuesta;
    }catch{
        console.log(error)
    }

}

export const editarPaciente = async (paciente, id)=> {
    try{
        const respuesta = await fetch(URL_pacientes+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(paciente)
        });
        return respuesta;
    }catch{
        console.log(error)
    }
}



export const crearComentario = async (comentario) => {
    try {
      const respuesta = await fetch(URL_comentarios, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comentario)
      });
  
      return respuesta;
    } catch{
      console.log(error);
    }
  };


  export const obtenerComentarios = async ()=> {
    try{
        const respuesta = await fetch(URL_comentarios);
        const listaComentarios = await respuesta.json();
        return listaComentarios;
    }catch{
        console.log(error)
    }

}