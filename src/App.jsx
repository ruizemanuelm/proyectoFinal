import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Admin from './components/views/Admin';
import Nosotros from './components/views/Nosotros';
import Error404 from './components/views/Error404'
import Contacto from './components/views/Contacto'
import CheckoutCachorros from './components/views/CheckoutCachorros'
import CheckoutMadurando from './components/views/CheckoutMadurando'
import CheckoutAdultos from './components/views/CheckoutAdultos'
import CrearTurno from './components/views/Administrador/Turnos/CrearTurno'
import CrearPaciente from './components/views/Administrador/pacientes/CrearPaciente'
import { useState } from 'react';
import RutasProtegidas from './components/Routes/RutasProtegidas';
import RutasAdministrador from './components/Routes/RutasAdministrador';
import AdminPacientes from './components/views/Administrador/AdminPacientes';


function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
      <Routes>
      <Route exact path='/' element={<Inicio usuarioLogueado={usuarioLogueado}/>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
        <Route exact path='/contacto' element={<Contacto/>}></Route>
        <Route exact path='/nosotros' element={<Nosotros/>}></Route>
        <Route exact path='/checkout-cachorros' element={<CheckoutCachorros/>}></Route>
        <Route exact path='/checkout-madurando' element={<CheckoutMadurando/>}></Route>
        <Route exact path='/checkout-adultos' element={<CheckoutAdultos/>}></Route>
        <Route exact path='/crearturno' element={<CrearTurno/>}></Route>
        <Route exact path='/adminpaciente' element={<AdminPacientes/>}></Route>
        <Route exact path='/crearpaciente' element={<CrearPaciente/>}></Route>
        <Route exact path='/admin' element={<Admin usuarioLogueado={usuarioLogueado}/>}></Route>
        
        <Route path="/admin/*" element={
          <RutasProtegidas>
            <RutasAdministrador></RutasAdministrador>
          </RutasProtegidas>
        }></Route>
      </Routes>
      
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App