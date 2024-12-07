import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// (**)--->> Inicio <<---(**)
// || Se comento todo este código porque se empezó a usar localStorage. ||

// const listaMock = [
//   {
//     id: '1',
//     detalles: 'Correr por 30 minutos',
//     periodo: 'día',
//     eventos: 1,
//     icono: '🏃🏻',
//     meta: 365,
//     plazo: '2030-01-01',
//     completado: 5,
//   },
//   {
//     id: '2',
//     detalles: 'Leer libros',
//     periodo: 'año',
//     eventos: 6,
//     icono: '📚',
//     meta: 12,
//     plazo: '2030-01-01',
//     completado: 2,
//   },
//   {
//     id: '3',
//     detalles: 'Viajar a otro país',
//     periodo: 'mes',
//     eventos: 1,
//     icono: '✈',
//     meta: 5,
//     plazo: '2030-01-01',
//     completado: 1,
//   },
// ];
// (**)--->> Fin <<---(**)

const memoria = localStorage.getItem('metas');
const estadoInicial = memoria
  ? JSON.parse(memoria)
  : {
      orden: [],
      objetos: {},
    };

function reductor(estado, accion) {
  switch (accion.tipo) {
    case 'colocar': {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce(
          (objeto, meta) => ({ ...objeto, [meta.id]: meta }),
          {}
        ),
      };
      localStorage.setItem('metas', JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    case 'crear': {
      const id = uuidv4();
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
          ...estado.objetos,
          [id]: { ...accion.meta, id }, // Asignar id aquí
        },
      };
      localStorage.setItem('metas', JSON.stringify(nuevoEstado));
      return nuevoEstado; // Devolver solo el nuevo estado
    }
    case 'actualizar': {
      const id = accion.meta.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.meta,
      };
      const nuevoEstado = { ...estado };
      localStorage.setItem('metas', JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    case 'borrar': {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter((item) => item !== id);
      delete estado.objetos[id];
      const nuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos,
      };
      localStorage.setItem('metas', JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
  }
}

// const metas = reductor(estadoInicial, { tipo: 'colocar', metas: listaMock });

export const Contexto = createContext(null);

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, estadoInicial);

  // (**)--->> Inicio <<---(**)
  // Esto lo implemente para que funcione el envió de metas, ya que no estaba funcionando y no se listaban las metas.
  // || Luego se comento este código, por que se empezó a usar localStorage que tomaba los datos directamente desde la API del navegador. ||
  // useEffect(() => {
  //   enviar({ tipo: 'colocar', metas: listaMock });
  // }, []);
  // (**)--->> Fin <<---(**)

  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
