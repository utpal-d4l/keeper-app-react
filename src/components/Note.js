import React from 'react'

const Note = ({ id, title, text, deleteNote }) => (
  <div className='note'>
    <h1>{title}</h1>
    <p>{text}</p>
    <button onClick={() => deleteNote(id)}>DELETE</button>
  </div>
)

export default Note
