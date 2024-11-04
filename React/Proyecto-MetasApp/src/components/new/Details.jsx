import estilos from './Details.module.css';

function Details() {
  const frecuencias = ['día', 'semana', 'mes', 'año'];
  const iconos = ['💻', '🏃🏻‍♂️', '📚', '🛩️', '💵'];

  return (
    <div className='tarjeta'>
      <form className='p-4'>
        <label className='label'>
          Describe tu meta{' '}
          <input className='input' placeholder='ej. 7 Libros' />
        </label>
        <label className='label'>
          ¿Con que frecuencia deseas cumplir esta meta?{' '}
          <span>(ej. 1 vez al mes)</span>
          <div className='flex'>
            <input className='input mr-6' type='number' />
            <select className='input'>
              {frecuencias.map((opcion) => (
                <option key={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className='label'>
          ¿Cuantas veces deseas completar esta meta?
          <input className='input' type='number' />
        </label>
        <label className='label'>
          ¿Tienes una fecha límite?
          <input className='input' type='date' />
        </label>
        <label className='label'>
          ¿Cuantas veces haz completado ya esta meta?
          <input className='input' type='number' />
        </label>
        <label className='label'>
          Escoge el icono para la meta
          <select className='input'>
            {iconos.map((logo) => (
              <option key={logo}>{logo}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className='boton boton--negro'>Crear</button>
        <button className='boton boton--gris'>Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
