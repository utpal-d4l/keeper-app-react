import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { Zoom } from '@material-ui/core'

function CreateNote({ createNote }) {
  const [isFocused, setIsFocused] = useState(false)
  const [note, setNote] = useState({ title: '', text: '' })

  const handleAddNote = (event) => {
    const { name, value } = event.target

    if (name === 'title') {
      setNote({ ...note, title: value })
    } else {
      setNote({ ...note, text: value })
    }
  }

  const handleCreateNote = (event) => {
    createNote(note)
    setNote({ title: '', text: '' })
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
          <button className="fab-button" type="button" disabled={!note.text} onClick={handleCreateNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateNote
