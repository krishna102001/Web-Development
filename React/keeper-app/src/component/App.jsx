import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);
  function addNote(notes) {
    setNewNote((prevValue) => {
      return [...prevValue, notes];
    });
    console.log(newNote);
  }
  function deleteNote(id) {
    setNewNote((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNote.map((note, index) => {
        // console.log(note.title);
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
