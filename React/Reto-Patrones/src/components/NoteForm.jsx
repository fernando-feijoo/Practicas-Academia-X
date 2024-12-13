import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useContext(NotesContext);
  
  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, description });
    setTitle('');
    setDescription('');
  };
  
  return (
    <form onSubmit={addNote} className="mb-4 text-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Título"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Descripción"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Añadir Nota
      </button>
    </form>
  );
};

export default NoteForm;
