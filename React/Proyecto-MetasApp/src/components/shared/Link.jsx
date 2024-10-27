import estilos from './css/Link.module.css';

function Link({ Icono, texto, href }) {
  return (
    <a href={href} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      {texto && <span className={estilos.texto}>{texto}</span>}
    </a>
  );
}

export default Link;
