import { NotesProvider } from './context/NotesContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  return (
    <NotesProvider>
      <div className='container mx-auto p-4 flex flex-col max-w-xl'>
        <h1 className='text-2xl mb-4 font-semibold'>Notas</h1>
        <NoteForm />
        <NoteList />
      </div>
    </NotesProvider>
  );
};

export default App;
