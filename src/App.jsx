import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import AdminTurnos from './components/views/Administrador/AdminTurnos';

function App() {

  return (
    <>
      <Menu></Menu>
      <AdminTurnos></AdminTurnos>
    </>
  )
}

export default App
