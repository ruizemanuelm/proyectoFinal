import React from 'react';
import logoveterinaria from '../../assets/logoveterinaria.png'
import {FaLocationPin,} from 'react-icons/fa6'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';


const Footer = () => {
    return (
        
        <footer className="bg-dark text-light py-5">
            
            <div className='container'>
                <nav className='row'>
                <Link to='/' className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                <img src={logoveterinaria} alt="logo"  width='150' height='90' />
                </Link>

                {/*<ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-3 text-center'>Huellitas</li>
                    <li className='text-center'>En este sitio web podras encontrar servicios que ofrecemos de veterinaria</li>
                </ul>*/}

                <ul className='col-12 col-md-4 list-unstyled'>
                    <li className='mb-3 text-center'> Contáctanos </li>
                    <Link><li className='text-center mb-1 text-white text-decoration-none'><FaLocationPin/> Gral Paz 556 </li></Link>
                    <Link><li className='text-center mb-1 text-white text-decoration-none' as={Link} to='/'><AiOutlineWhatsApp/> + 3816422895</li></Link>
                    <Link><li to='/' className='text-center text-white text-decoration-none'>Huellitas@gmail.com</li></Link>
                </ul>

                <ul className='col-12 col-md-4 list-unstyled'>
                    <li className='mb-3 text-center'>Síguenos en nuestras Redes</li>
                    <Link><li className='text-center text-white'><AiFillFacebook/> Facebook</li></Link>
                    <Link><li className='text-center text-white text-decoration-none'><AiOutlineInstagram/> Instagram</li></Link>
                    <Link><li className='text-center text-white text-decoration-none'><AiOutlineTwitter/> Twitter</li></Link>
                </ul>

                </nav>
            </div>
        </footer>
    );
};

export default Footer;