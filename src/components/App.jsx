import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [Notes, setNotes] = useState([]); 

   function addNote(newNote) {
     setNotes(prevNotes => [...prevNotes, newNote]);
      console.log(Notes);
    }
    
    console.log(Notes);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((note, index) => (

       
        
    <Note key={index} title={note.title} content={note.content} />

      ))}
      <Footer />
    </div>
  );
}

export default App;
