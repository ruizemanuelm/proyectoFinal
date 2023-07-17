import React from 'react';
import { Link } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className='container'>
                <nav className='row'>
                <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                    <img src='../' className='mx-2' width={80}/>
                </Link>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-2 text-center'>Huellitas</li>
                    <li className='text-center'>En este sitio web podras encontrar servicios que ofrecemos de veterinaria</li>
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-2 text-center'>Huellitas</li>
                    <li className='text-center'>En este sitio web podras encontrar servicios que ofrecemos de veterinaria</li>
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='mb-2 text-center'>Huellitas</li>
                    <li className='text-center'>En este sitio web podras encontrar servicios que ofrecemos de veterinaria</li>
                </ul>


                </nav>
            </div>
        </footer>
    );
};

export default Footer;