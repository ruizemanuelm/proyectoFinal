import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
/*import Admin from './components/views/Admin';*/
import Nosotros from './components/views/Nosotros';
import Error404 from './components/views/Error404'
import Contacto from './components/views/Contacto'
import Login from './components/views/Login'
import Checkout from './components/views/Checkout'
import Registro from './components/views/Registro';
import CrearTurno from './components/views/Administrador/Turnos/CrearTurno'
import { useState } from 'react';


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
      <Routes>
      <Route exact path='/' element={<Inicio/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/registro' element={<Registro/>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
        <Route exact path='/contacto' element={<Contacto/>}></Route>
        <Route exact path='/nosotros' element={<Nosotros/>}></Route>
        <Route exact path='/checkout' element={<Checkout/>}></Route>
        <Route exact path='/crearturno' element={<CrearTurno/>}></Route>
        
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App