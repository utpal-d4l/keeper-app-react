import React from "react";

function CreateNote({addNote, createNote, note}) {
  const handleAddNote = (event) => {
    const {name, value} = event.target

    if (name === 'title') {
      addNote({...note, title: value})
    } else {
      addNote({...note, text: value})
    }
  }

  const handleCreateNote = (event) => {
    createNote()
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleAddNote} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.text} onChange={handleAddNote} />
        <button onClick={handleCreateNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote
