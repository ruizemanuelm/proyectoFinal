export const login = async (usuario)=>{
    try{
        //pedir a la api la lista de usuarios
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