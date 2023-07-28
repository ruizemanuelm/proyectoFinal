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
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();
  const { register, handleSubmit, formState: { errors}, reset} = useForm ()
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const onSubmit = (usuario)=>{
    console.log('entro funcion');
    login(usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        navegacion('/admin');
      }else{
        Swal.fire(
          'Ocurrio un error',
          'El email o usuario son erroneos',
          'error'
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
              <NavDropdown.Item end to ={'/checkout'} className={'text-dark'}>Primeros Pasos</NavDropdown.Item>
              <NavDropdown.Item end to ={'/checkout'}>Madurando</NavDropdown.Item>
              <NavDropdown.Item end to ={'/checkout'}>Adultos</NavDropdown.Item>
            </NavDropdown>
            <NavLink   end to={'/contacto'}  className={'nav-item nav-link '}  ><BsTelephoneFill/> Contacto</NavLink>
            <NavLink   end to={'/crearturno'}  className={'nav-item nav-link buttonSolicitar'}  ><AiFillFileText/> Solicitar Turno</NavLink>
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
                <NavLink eventKey={2} onClick={handleShow} className={'nav-item nav-link'}><BsFillPersonFill/> Iniciar sesion</NavLink>
              </Nav>
            </>
          }
            
            
        </Navbar.Collapse>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                { ...register('email', {
                  required:'El email es un dato obligatorio',
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:'El email debe tener un formato valido (mail@dominio.com)'
                  }
                 })}
                />
                <Form.Text className="text-danger">
                 { errors.email?.message}
                </Form.Text>
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} 
               {
                ...register('password',{
                  required: 'El password es un dato obligatorio',
                  pattern:{
                    value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message: 'El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                  }
                })
               }/>
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

              <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}> 
            <Form.Group className="mb-3" controlId="emailForm">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@ejemplo.com"
                autoFocus
                { ...register('emailr', {
                  required:'El email es un dato obligatorio',
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:'El email debe tener un formato valido (mail@dominio.com)'
                  }
                 })}
                />
                <Form.Text className="text-danger">
                 { errors.emailr?.message}
                </Form.Text>

            </Form.Group>
            <Form.Group className="mb-3" controlId="namesForm">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Joe Doe"
                autoFocus
                {
                  ...register('usernamer',
                  {required:'ingrese el nombre y apellido',
                  pattern:{
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/,
                    message: 'ingrese el nombre correctamente'
                  }})
                  
                }
              />
              <Form.Text className="text-danger">
                { errors.usernamer?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="passwordForm">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type='password' rows={3} 
               {
                ...register('passwordr',{
                  required: 'El password es un dato obligatorio',
                  pattern:{
                    value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message: 'El password debe contener entre 8 y 16 caracteres y debe incluir numeros, caracteres en mayuscula, miniscula y almenos un caracter especial'
                  }
                })
               }
              />
            <Form.Text className="text-danger">
              { errors.passwordr?.message}
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
    </Navbar>
    );
};

export default Menu;