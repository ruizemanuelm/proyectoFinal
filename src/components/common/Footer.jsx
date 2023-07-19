import React from 'react';
import logoveterinaria from '../../assets/logoveterinaria.png'
import {FaLocationPin,} from 'react-icons/fa6'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';


const Footer = () => {
    return (
        
        <footer className="bg-dark text-light mainFooter">
            
            <div className='container'>
                <nav className='row'>
                <Link to='/' className='col-md-2  d-flex align-items-center justify-content-center mb-4'>
                <img src={logoveterinaria} alt="logo"  width='150' height='90' />
                </Link>

                <ul className='col- col-md-3  list-unstyled'>
                    <li className='mb-4 text-center'>Nosotros</li>
                    <Link style={{textDecoration:'none'}}><li className='text-center mb-2 text-white'>Acerca de Nosotros</li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-center text-white'>Sucursales</li></Link>
                </ul>

                <ul className='col- col-md-3  list-unstyled'>
                    <li className='mb-3 text-center'> Contáctanos </li>
                    <Link style={{textDecoration:'none'}}><li className='text-center mb-1 text-white'><FaLocationPin/> Gral Paz 556 </li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-center mb-1 text-white' as={Link} to='/'><AiOutlineWhatsApp/> + 3816422895</li></Link>
                    <Link style={{textDecoration:'none'}}><li to='/' className='text-center text-white'>Huellitas@gmail.com</li></Link>
                </ul>

                <ul className='col- col-md-3  list-unstyled'>
                    <li className='mb-3 text-center'>Síguenos en nuestras Redes</li>
                    <Link style={{textDecoration:'none'}}><li className='text-center text-white'><AiFillFacebook/> Facebook</li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-center text-white'><AiOutlineInstagram/> Instagram</li></Link>
                    <Link style={{textDecoration:'none'}}><li className='text-center text-white'><AiOutlineTwitter/> Twitter</li></Link>
                </ul>

                </nav>
            </div>
        </footer>
    );
};

export default Footer;