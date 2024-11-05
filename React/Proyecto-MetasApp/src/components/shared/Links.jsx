import { Link } from 'react-router-dom';
import estilos from './css/Links.module.css';

function Links({ Icono, texto, to }) {
  return (
    <Link to={to} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      {texto && <span className={estilos.texto}>{texto}</span>}
    </Link>
  );
}

export default Links;
