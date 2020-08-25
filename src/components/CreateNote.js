import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add'
import { Fab, Zoom } from '@material-ui/core'

function CreateNote({ addNote, createNote, note }) {
  const [isFocused, setIsFocused] = useState(false)

  const handleAddNote = (event) => {
    const { name, value } = event.target

    if (name === 'title') {
      addNote({ ...note, title: value })
    } else {
      addNote({ ...note, text: value })
    }
  }

  const handleCreateNote = (event) => {
    createNote()
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note">
        {isFocused && (
          <input
            className="input"
            name="title"
            onChange={handleAddNote}
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          className="textarea"
          name="content"
          onChange={handleAddNote}
          onFocus={() => setIsFocused(true)}
          placeholder="Take a note..."
          rows={isFocused ? '3' : '1'}
          value={note.text}
        />
        <Zoom in={isFocused}>
          <Fab disabled={!note.text} onClick={handleCreateNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateNote
