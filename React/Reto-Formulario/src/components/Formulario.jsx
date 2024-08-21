// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();
    alert(
      `Nombre enviado: ${nombre}\n\nEmail enviado: ${email}\n\nMensaje enviado: ${mensaje}`
    );
  };

  return (
    <div className='contenedor-form'>
      <form onSubmit={manejarEnvio}>
        <div className='titulo-formulario'>
          <h1>Formulario</h1>
        </div>
        <div className='contenedor-campos'>
          <div className='campo-formulario'>
            <p>Nombre:</p>
            <input
              type='text'
              name='nombre'
              placeholder='ej. Fernando Feijoo'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className='campo-formulario'>
            <p>Email:</p>
            <input
              type='email'
              name='email'
              placeholder='ej. correo@host.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='campo-formulario'>
            <p>Mensaje:</p>
            <textarea
              name='mensaje'
              placeholder='ej. Algún mensaje...'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
