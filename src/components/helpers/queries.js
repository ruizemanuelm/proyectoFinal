const URL_usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_pacientes = import.meta.env.VITE_API_PACIENTES;


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

export const obtenerPacientePorId = async (id)=> {
    try{
        const respuesta = await fetch(URL_pacientes+'/'+id);
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
          "Content-Type": "application/json"
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

