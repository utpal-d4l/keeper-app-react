import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({ title: '', text: '' })

  const addNote = (note) => setNote(note)

  const createNote = () => {
    const id = uuidv4()

    setNotes([...notes, { ...note, id }])
    setNote({ title: '', text: '' })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(item => item.id !== id))
  }

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} createNote={createNote} note={note} />
      {notes.map(item => <Note key={item.id} deleteNote={deleteNote} {...item}  />)}
      <Footer />
    </>
  )
}

export default App
