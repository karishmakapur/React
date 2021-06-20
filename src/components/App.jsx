//2. Create a App.jsx component.

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notesList, setNotesList] = React.useState([]);

  function addNote(note){
    setNotesList(prevVal =>
      {
        return [...prevVal, note]
      })
  }

  function deleteNote(id){
    setNotesList(prevVal => {
      return prevVal.filter((note, index) => {
        return id !== index;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea  onAdd={addNote}/>
      {notesList.map((note,x) => {
        return <Note key={x} id={x} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
