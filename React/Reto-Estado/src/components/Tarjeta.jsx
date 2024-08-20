// 1. Crea un componente de tarjetas de productos el cual incluya
// una imagen, un titulo, una descripción y contador con la cantidad de artículos de ese producto.
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Tarjeta() {
  const [contador, setContador] = useState(0);

  const subir = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="tarjeta">
      <div className="encabezado-tarjeta">
        <img src="./src/assets/mando.webp" alt="Imagen de producto." />
      </div>
      <div className="cuerpo-tarjeta">
        <div className="titulo-tarjeta">
          <h1>Nombre del producto.</h1>
        </div>
        <div className="descripcion-tarjeta">
          <p>Prueba de descripción.</p>
        </div>
        <div className="contador-tarjeta">
          <div className="btn-izquierdo" onClick={restar}>-</div>
          <div className="conteo">{contador}</div>
          <div className="btn-derecho" onClick={subir}>+</div>
        </div>
      </div>
    </div>
  );
}
