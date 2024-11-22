import { useContext } from 'react';
import Meta from './Meta';
import { Contexto } from '../../services/Memoria';

function Lista() {
  const metas = useContext(Contexto);
  return (
    <div>
      {metas.map((meta) => (
        <Meta key={meta.id} {...meta} />
      ))}
    </div>
  );
}

export default Lista;
