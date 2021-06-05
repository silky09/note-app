// import React, { useState } from 'react';
// import uuid from "react-uuid";
// import Sidebar from './components/Sidebar';
// import Main from './components/Main';
// import "./App.css";

// const App = () => {
//   const [notes, setNotes] = useState([]);

//   const [activeNote, setActiveNote] = useState(false);

//   const onAddNote = () => {
//     const newNote = {
//       id: uuid(),                    /* npm install react-uuid:  to show the random id every time*/
//       title: "Untitled Note",
//       body: "",
//       lastModified: Date.now(),
//     }
//     setNotes([newNote, ...notes]);
//   };

//   const onDeleteNote = (idToDelete) => {
//     setNotes(notes.filter((note) => note.id !== idToDelete));
//   };

//   const getActiveNote = () => {
//     return notes.find(({ id }) => id === activeNote);
//   };
  
//   return (
//     <div className="App">
//       <Sidebar
//         notes={notes}
//         onAddNote={onAddNote}
//         onDeleteNote={onDeleteNote}
//         activeNote={activeNote}
//         setActiveNote={setActiveNote}
//         />
//       <Main activeNote={getActiveNote()}/>
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
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
