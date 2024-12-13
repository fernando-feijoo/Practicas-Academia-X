import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  
  const removeNote = () => {
    dispatch({ type: 'REMOVE_NOTE', id: note.id });
  };
  
  return (
    <div className="bg-gray-200 p-4 rounded shadow mb-2 flex justify-between items-center">
      <div>
        <h2 className="font-bold">{note.title}</h2>
        <p>{note.description}</p>
      </div>
      <button className="text-red-500" onClick={removeNote}>Eliminar</button>
    </div>
  );
};

export default Note;
