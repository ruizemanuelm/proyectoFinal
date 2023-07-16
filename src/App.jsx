import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import AdminPacientes from './components/views/Administrador/AdminPacientes';

function App() {

  return (
    <>
      <Menu></Menu>
      <AdminPacientes></AdminPacientes>
    </>
  )
}

export default App
