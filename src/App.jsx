import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/views/Admin';


function App() {

  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
      <Menu></Menu>
      <Inicio></Inicio>
    <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App