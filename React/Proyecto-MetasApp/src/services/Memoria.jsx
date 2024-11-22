import { createContext, useReducer } from 'react';

const listaMock = [
  {
    id: '1',
    detalles: 'Correr por 30 minutos',
    periodo: 'día',
    eventos: 1,
    icono: '🏃🏻',
    meta: 365,
    plazo: '2030-01-01',
    completado: 5,
  },
  {
    id: '2',
    detalles: 'Leer libros',
    periodo: 'año',
    eventos: 6,
    icono: '📚',
    meta: 12,
    plazo: '2030-01-01',
    completado: 2,
  },
  {
    id: '3',
    detalles: 'Viajar a otro país',
    periodo: 'mes',
    eventos: 1,
    icono: '✈',
    meta: 5,
    plazo: '2030-01-01',
    completado: 1,
  },
];

const estadoInicial = {
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
      return nuevoEstado;
    }
  }
}

console.log(reductor(estadoInicial, { tipo: 'colocar', metas: listaMock }));

export const Contexto = createContext(null);

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, estadoInicial);
  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
