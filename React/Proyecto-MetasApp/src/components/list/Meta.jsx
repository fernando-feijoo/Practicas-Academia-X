import { Link } from 'react-router-dom';
import estilos from './Meta.module.css';

function Meta({id, icono, eventos, periodo, detalles, meta, completado}) {

  return (
    <Link to={`/lista/${id}`} className={estilos.meta + ' tarjeta'}>
      <div className='flex items-center'>
        <div className={estilos.icono}>{icono}</div>
        <p className={estilos.frecuenciaP}>
          {eventos}
          <sub className={estilos.frecuenciaSub}>/ {periodo}</sub>
        </p>
        <p>{detalles}</p>
      </div>
      <div className='flex'>
        <div className='relative m-2 mx-5'>
          <p className='text-center'>
            {completado} de {meta}
          </p>
          <div className={estilos.barraBase}>
            <div style={{width: `${Math.round((completado / meta) * 100)}%`}} className={estilos.barraProgreso}></div>
          </div>
        </div>
        <button className='boton boton--gris'>Completado</button>
      </div>
    </Link>
  );
}

export default Meta;
