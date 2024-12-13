import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, { id: uuidv4(), title: action.title, description: action.description }];
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
