import React from 'react';
import {logoveterinaria} from '../../assets/logoveteria'
import {FaLocationPin,} from 'react-icons/fa6'
import {AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <nav>
            <div className='container'>
                <nav className='row'>
                <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                <img src={logoveterinaria} alt="logo"  width='150' height='90' />
                </Link>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-2 text-center'>Huellitas</li>
                    <li className='text-center'>En este sitio web podras encontrar servicios que ofrecemos de veterinaria</li>
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-3 text-center'> Contactanos </li>
                    <li className='text-center mb-1'><FaLocationPin/> Gral Paz 556 </li>
                    <li className='text-center mb-1' as={Link} to='/'><AiOutlineWhatsApp/> + 3816422895</li>
                    <Link className='text-center'>Huellitas@gmail.com</Link>
                    
                    
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-2 text-center'>Siguenos en nuestras Redes</li>
                    <li className='text-center '><AiFillFacebook/> Facebook</li>
                    <li className='text-center '><AiOutlineInstagram/> Instagram</li>
                    <li className='text-center '><AiOutlineTwitter/> Twitter</li>
                </ul>


                </nav>
            </div>
            </nav>
        </footer>
    );
};

export default Footer;