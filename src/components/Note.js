import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete'

const Note = ({ id, title, text, deleteNote }) => (
  <div className='note'>
    <h1>{title}</h1>
    <p>{text}</p>
    <button onClick={() => deleteNote(id)}>
      <DeleteIcon />
    </button>
  </div>
)

export default Note
