import { useEffect, useState } from 'react';
import estilos from './Details.module.css';

function Details() {
  const [form, setForm] = useState({
    detalles: '',
    eventos: 1,
    periodo: 'semana',
    icono: '🏃🏻‍♂️',
    meta: 52,
    plazo: '2030-01-01',
    completado: 0,
  });

  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  const onChange = (event, prop) => {
    setForm((estado) => ({ ...estado, [prop]: event.target.value }));
  };

  useEffect(() => {
    // console.log(form);
  }, [form]);

  const crear = async () => {
    console.log(form);
  };

  const frecuencias = ['día', 'semana', 'mes', 'año'];
  const iconos = ['💻', '🏃🏻‍♂️', '📚', '🛩️', '💵'];

  return (
    <div className='tarjeta'>
      <form className='p-4'>
        <label className='label'>
          Describe tu meta{' '}
          <input
            className='input'
            placeholder='ej. 7 Libros'
            value={detalles}
            onChange={(e) => onChange(e, 'detalles')}
          />
        </label>
        <label className='label'>
          ¿Con que frecuencia deseas cumplir esta meta?{' '}
          <span>(ej. 1 vez al mes)</span>
          <div className='flex'>
            <input
              className='input mr-6'
              type='number'
              value={eventos}
              onChange={(e) => onChange(e, 'eventos')}
            />
            <select
              className='input'
              value={periodo}
              onChange={(e) => onChange(e, 'periodo')}
            >
              {frecuencias.map((opcion) => (
                <option key={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className='label'>
          ¿Cuantas veces deseas completar esta meta?
          <input
            className='input'
            type='number'
            value={meta}
            onChange={(e) => onChange(e, 'meta')}
          />
        </label>
        <label className='label'>
          ¿Tienes una fecha límite?
          <input
            className='input'
            type='date'
            value={plazo}
            onChange={(e) => onChange(e, 'plazo')}
          />
        </label>
        <label className='label'>
          ¿Cuantas veces haz completado ya esta meta?
          <input
            className='input'
            type='number'
            value={completado}
            onChange={(e) => onChange(e, 'completado')}
          />
        </label>
        <label className='label'>
          Escoge el icono para la meta
          <select
            className='input'
            value={icono}
            onChange={(e) => onChange(e, 'icono')}
          >
            {iconos.map((logo) => (
              <option key={logo}>{logo}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className='boton boton--negro' onClick={crear}>
          Crear
        </button>
        <button className='boton boton--gris'>Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
