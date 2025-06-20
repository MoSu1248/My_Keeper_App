import React,{useState} from "react";

function CreateArea({onAdd}) {

      const [note, setNote] = useState({
        title: "",
        content: "",
      });

  function handleChange(event) {
    const { value, name } = event.target
    
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }))

  }

  function submitNote(event) {
    event.preventDefault();
    onAdd({ ...note }); 
    setNote({ title: "", content: "" }); 
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
