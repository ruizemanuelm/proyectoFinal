import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import AdminTurnos from './components/views/Administrador/AdminTurnos';
import CrearTurno from './components/views/Administrador/Turnos/CrearTurno';

function App() {

  return (
    <>
      <Menu></Menu>
      <CrearTurno></CrearTurno>
    </>
  )
}

export default App
