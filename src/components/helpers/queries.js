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

export const login = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        
        const usuario = await respuesta.json();
        return {
            status: respuesta.status,
            mensaje: usuario.mensaje,
            nombre: usuario.nombreUsuario
        }
        
    }catch(error){
        console.log(error)
    }
}

