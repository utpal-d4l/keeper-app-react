import React from 'react'

import Note from './Note'

function DisplayNote({ deleteNote, notes }) {
  return (
    <div className="notes-container">
      {notes.map((item) => <Note key={item._id} deleteNote={deleteNote} {...item} />)}
    </div>
  )
}

export default DisplayNote
