import React, { useState, forwardRef } from "react";
import { FaStar } from "react-icons/fa";

const Puntaje = forwardRef(({ onChange }, ref ) => {
    const [puntaje, setPuntaje] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <>
      <div className="d-flex">
        {[...Array(5)].map((star, index) => {
          const puntajeActual = index + 1;
          return (
            <div key={puntajeActual}>
              <label>
                <input 
                  className="d-none"
                  type="radio" 
                  name="puntaje" 
                  value={puntajeActual}
                  onClick={() => setPuntaje(puntajeActual)}
                />
                <FaStar 
                className="star" 
                size={40}
                color={puntajeActual <= (hover || puntaje) ? "#ffc107" : "#e4e5e9"} 
                onMouseEnter={() => setHover(puntajeActual)}
                onMouseLeave={() => setHover(null)}
                />
              </label>
            </div>
          );
        })}
      </div>
      </>
    );
  })

export default Puntaje;
