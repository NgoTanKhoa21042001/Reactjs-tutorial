import { useEffect, useState } from "react";
import uuid from "react-uuid";

import "./index.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = (e) => {
    const newNotes = {
      id: uuid(),
      title: "Ultitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNotes, ...notes]);
    setActiveNote(newNotes.id);
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };
  // khi nhấn notes bên sidebar thì main sẽ hiện theo
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
