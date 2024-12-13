import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import Note from './Note';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="flex flex-col">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
