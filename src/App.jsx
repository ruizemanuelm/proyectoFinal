import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import Inicio from './components/views/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
      <Menu></Menu>
      <Inicio></Inicio>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
