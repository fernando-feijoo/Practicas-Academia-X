/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Tarjeta({ imgSrc, imgAlt, titulo, descripcion }) {
  const [contador, setContador] = useState(0);

  const subir = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="tarjeta">
      <div className="encabezado-tarjeta">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="cuerpo-tarjeta">
        <div className="titulo-tarjeta">
          <h1>{titulo}</h1>
        </div>
        <div className="descripcion-tarjeta">
          <p>{descripcion}</p>
        </div>
        <div className="contador-tarjeta">
          <div className="btn" onClick={restar}>
            -
          </div>
          <div className="conteo">{contador}</div>
          <div className="btn" onClick={subir}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
