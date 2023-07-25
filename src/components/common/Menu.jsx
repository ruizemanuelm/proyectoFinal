import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Form, Modal, Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import logoveterinaria from '../../assets/logoveterinaria.png'
import {BsHouseDoorFill, BsFillPersonFill, BsPersonAdd, BsFillPersonPlusFill, BsTelephoneFill } from 'react-icons/bs'
import {FaCartShopping} from 'react-icons/fa6'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillFileText} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';


const Menu = () => {

    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    return (
          <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={logoveterinaria} alt="logo"  width='150' height='90' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="m-auto " >
                <NavLink /*end to={'/'}*/ className={'nav-item nav-link'}><BsHouseDoorFill/> Inicio</NavLink>
                <Nav.Link /*end to={'/'}*/ className={'nav-item nav-link'}><FaCartShopping/> Tienda</Nav.Link>
            <NavDropdown title={<span className='' id="collasible-nav-dropdown"><RiServiceFill/> Servicios</span>}>
                <NavDropdown.Item /*end to ={'/'}*/ className={'text-dark'}>Primeros Pasos</NavDropdown.Item>
                <NavDropdown.Item /*end to ={'/'}*/>Madurando</NavDropdown.Item>
                <NavDropdown.Item /*end to ={'/'}*/>Adultos</NavDropdown.Item>
                
            </NavDropdown>
            {/*<Nav.Link /*end to={'/contacto'} className={'nav-item nav-link'}>{/*<BsTelephoneFill/>} Contacto</Nav.Link>*/}
            <Nav.Link   /*end to={'/contacto'}*/  className={'nav-item nav-link '}  ><BsTelephoneFill/> Contacto</Nav.Link>
            <Nav.Link   /*end to={'/contacto'}*/  className={'nav-item nav-link buttonSolicitar'}  ><AiFillFileText/> Solicitar Turno</Nav.Link>
            
            </Nav>
            
            <Nav>
            
            <Nav.Link /*end to={'/'}*/ onClick={handleShowRegister} className={'nav-item nav-link '}>{<BsFillPersonPlusFill/>} Registrar</Nav.Link>
            <Nav.Link eventKey={2} onClick={handleShow} /*end to={'/'}*/ className={'nav-item nav-link '}><BsFillPersonFill/> Iniciar sesion</Nav.Link>
            </Nav>

        </Navbar.Collapse>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
              <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@ejemplo.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="namesForm">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Joe Doe"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordForm"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseRegister}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
    );
};

export default Menu;