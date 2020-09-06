import React from 'react'

import Note from './Note'

function DisplayNote({ notes, ...other }) {
  return (
    <div className="notes-container">
      {notes.map((item) => <Note key={item._id} {...item} {...other} />)}
    </div>
  )
}

export default DisplayNote
