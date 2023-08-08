import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Form, Modal, Button} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import logoveterinaria from '../../assets/logoveterinaria.png'
import {BsHouseDoorFill, BsFillPersonFill, BsFillPersonPlusFill, BsTelephoneFill } from 'react-icons/bs'
import {FaCartShopping} from 'react-icons/fa6'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillFileText} from 'react-icons/ai'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login, register } from '../helpers/queries';
import Swal from 'sweetalert2';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  const formRegistro = useForm();
  const formLogin = useForm();

  const onSubmit = (usuario)=>{
    login(usuario).then((respuesta)=>{
      if(respuesta && respuesta.nombreUsuario){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        setShow(false);
        navegacion('/admin');
        formLogin.reset();
      }else{
        Swal.fire(
          'Ocurrio un error',
          'El email o contraseña es incorrecto',
          'error'
        )
      }
    })
  }

  const onRegistro = (usuario)=>{
    register(usuario).then((respuesta)=>{
      
      if(respuesta?.status===201){
        Swal.fire(
          'Se creo un usuario nuevo'
        )
        setShowRegister(false)
        formRegistro.reset();
      }else{
        Swal.fire(
          'Ocurrio un error',
          'el email o contraseña es invalido'
        )
      }
    })
  }
    
  const logout = ()=>{
    sessionStorage.removeItem('usuario');
    setUsuarioLogueado({});
    navegacion('/');
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logoveterinaria} alt="logo"  width='150' height='90' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="m-auto ">
            <NavLink end to={'/'} className={'nav-item nav-link'}><BsHouseDoorFill/> Inicio</NavLink>
            <NavLink end to={'/error404'} className={'nav-item nav-link'}><FaCartShopping/> Tienda</NavLink>
            <NavDropdown title={<span className='' id="collasible-nav-dropdown" to={'/error404'}><RiServiceFill/> Servicios</span>}>
              <NavDropdown.Item as={Link} to={'/checkout-cachorros'} className={'text-dark'}>Primeros Pasos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/checkout-madurando'}>Madurando</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/checkout-adultos'}>Adultos</NavDropdown.Item>
            </NavDropdown>
            <NavLink end to={'/contacto'} className={'nav-item nav-link '}><BsTelephoneFill/> Contacto</NavLink>
            <NavLink end to={'/crearturno'} className={'nav-item nav-link buttonSolicitar'}><AiFillFileText/> Solicitar Turno</NavLink>
          </Nav>
          {
          (usuarioLogueado.nombreUsuario)?
              <>
              <Nav>
                <NavLink end to={'/admin'}  className={'nav-item nav-link '}>{<BsFillPersonPlusFill/>} Administrador</NavLink>
                <Button variant='dark' onClick={logout}>Logout</Button>
              </Nav>
              </>:
              <>
              <Nav>
                <NavLink onClick={handleShowRegister} className={'nav-item nav-link'}>{<BsFillPersonPlusFill/>} Registrar</NavLink>
                <NavLink  onClick={handleShow} className={'nav-item nav-link'}><BsFillPersonFill/> Iniciar sesion</NavLink>
              </Nav>
              </>
          }
        </Navbar.Collapse>
      </Container>

      <Modal show={showRegister} onHide={handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formRegistro.handleSubmit(onRegistro)}> 
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@ejemplo.com"
                autoFocus
                {...formRegistro.register('email', {
                    required:'El email es un dato obligatorio',
                    pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:'El email debe tener un formato valido (mail@dominio.com)'
                  }})
                }
                />
                <Form.Text className="text-danger">
                {formRegistro.formState.errors.email?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="namesForm">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre de usuario"
                autoFocus
                {
                  ...formRegistro.register('nombreUsuario',
                  {required:'ingrese el nombre de usuario',
                  pattern:{
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/,
                  message: 'ingrese el nombre de usuario'
                  }})
                }
              />
              <Form.Text className="text-danger">
                { formRegistro.formState.errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordForm">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} 
              {
                ...formRegistro.register('password',{
                  required: 'El password es un dato obligatorio',
                  pattern:{
                  value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message: 'El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                  }})
              }
              />
              <Form.Text className="text-danger">
                { formRegistro.formState.errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseRegister}>
              Cerrar
            </Button>
            <Button variant="primary" type='submit'>
              Registrarse
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesion</Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formLogin.handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                { ...formLogin.register('email', {
                  required:'El email es un dato obligatorio',
                  pattern: {
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:'El email debe tener un formato valido (mail@dominio.com)'
                  }
                })}
                />
                <Form.Text className="text-danger">
                  { formLogin.formState.errors.email?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} 
              {
                ...formLogin.register('password',{
                  required: 'El password es un dato obligatorio',
                  pattern:{
                  value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message: 'El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                  }})
              }
              />
                <Form.Text className="text-danger">
                  { formLogin.formState.errors.password?.message}
                </Form.Text>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type='submit'>
              Ingresar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Navbar>
    );
};

export default Menu;