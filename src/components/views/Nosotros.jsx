import React from 'react';
import { Button, Card,  CardGroup,  Container, Row } from 'react-bootstrap';
import sebastian from '../../assets/sebastian.jpeg'
import lucio from '../../assets/lucio.jpg'
import emanuel from '../../assets/emanuel.jpg'
import { NavLink, Link } from 'react-router-dom';


const Nosotros = () => {

      const miembros = [
        {
          nombre: 'Lucio Lazarte',
          descripcion: 'Estudiante de Programación',
          edad: 'Edad: 22',
          imagen: lucio,
        },
        {
          nombre: 'Matias Emanuel Ruiz Villalobo',
          descripcion: 'Estudiante de Programación',
          edad: 'Edad: 22',
          imagen: emanuel,
        },
        {
          nombre: 'Sebastián Orosco',
          descripcion: 'Estudiante de Programación',
          edad: 'Edad: 27',
          imagen: sebastian,
        },
      ];
    
      return (

        <section className="container mt-5">
          <h1 className="display-4 text-center py-5">Acercá de nosotros</h1>
          <h3 className='text-center'>En nuestra veterinaria, cuidamos con amor y experiencia a nuestros amigos peludos, brindando atención de calidad y servicios especializados para garantizar su bienestar en cada etapa de sus vidas. ¡Porque su salud y felicidad son nuestra pasión!</h3>
          
          <h2 className="display-4 text-center py-5">Equipo de Trabajo</h2>
          <hr/>
      <article className="row">
        {miembros.map((miembro, index) => (
          <aside className="col-md-12 card mb-5 border-0">
              <div className="row m-5">
                <div className="col-md-6">
                  <img
                    src={miembro.imagen}
                    className="card-img-top img-fluid rounded-circle mx-auto d-block"
                    alt={miembro.nombre}
                    style={{ height: '200px', width: '200px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-6 ">
                  <div className="card-body">
                    <h5 className="card-title ">{miembro.nombre}</h5>
                    <h5 className="card-text ">{miembro.descripcion}</h5>
                    <h6 className="card-text ">{miembro.edad}</h6>
                  </div>
                </div>
              </div>
            </aside>
          
        ))}
      </article>
    </section>
     
    
      
    );
};

export default Nosotros;