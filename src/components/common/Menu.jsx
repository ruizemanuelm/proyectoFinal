import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logoveterinaria from '../../assets/logoveterinaria.png'
import {BsHouseDoorFill, BsFillPersonFill, BsPersonAdd, BsFillPersonPlusFill, BsTelephoneFill } from 'react-icons/bs'
import {FaCartShopping} from 'react-icons/fa6'
import {RiServiceFill} from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom';


const Menu = () => {
    return (
          <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
        <Container>
        <Navbar.Brand as={Link} to='/'><img src={logoveterinaria} alt="logo"  width='150' height='90' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mx-auto " >
                <NavLink end to={'/'} className={'nav-item nav-link'}><BsHouseDoorFill/>Inicio</NavLink>
                <Nav.Link end to={'/'} className={'nav-item nav-link'}><FaCartShopping/> Tienda</Nav.Link>
            <NavDropdown title={<span className='' id="collasible-nav-dropdown"><RiServiceFill/> Servicios</span>}>
                <NavDropdown.Item end to ={'/'} className={'text-dark'}>Peluqueria</NavDropdown.Item>
                <NavDropdown.Item end to ={'/'}>Veterinaria</NavDropdown.Item>
                <NavDropdown.Item end to ={'/'}>Adopciones</NavDropdown.Item>
                <NavDropdown.Item end to ={'/'}>Guarderia</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link end to={'/contacto'} className={'nav-item nav-link'}><BsTelephoneFill/> Contacto</Nav.Link>
            </Nav>

            <Nav>
            <Nav.Link d to={'/'} className={'nav-item nav-link'}><BsFillPersonPlusFill/> Registrar</Nav.Link>
            <Nav.Link eventKey={2} d to={'/'} className={'nav-item nav-link'}><BsFillPersonFill/> Mi cuenta</Nav.Link>
            </Nav>

        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Menu;