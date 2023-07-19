import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import AdminPacientes from './components/views/Administrador/AdminPacientes';
import CrearPaciente from './components/views/Administrador/pacientes/CrearPaciente';

function App() {

  return (
    <>
      <Menu></Menu>
      <AdminPacientes></AdminPacientes>
      <CrearPaciente></CrearPaciente>
    </>
  )
}

export default App
