import React, { useEffect, useState } from 'react'

import CreateNote from './CreateNote'
import DisplayNote from './DisplayNote'
import Footer from './Footer'
import Header from './Header'
import withApiCall from '../hoc/withApiCall'
import { CreateNote as CreateNoteCall, DeleteNote, GetNotes, UpdateNote } from '../api/routes'

function Home({ apiCall, logout }) {
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const res = await apiCall(GetNotes)
    setNotes(res || [])
  }

  useEffect(() => {
    getNotes()
  }, [])

  const createNote = (note) => apiCall(() => CreateNoteCall(note), getNotes)

  const deleteNote = (id) => apiCall(() => DeleteNote({ id }), getNotes)

  const updateNote = ({ id, update }) => apiCall(() => UpdateNote({ id, update }), getNotes)

  return (
    <>
      <Header logout={logout} />
      <CreateNote createNote={createNote} />
      <DisplayNote deleteNote={deleteNote} updateNote={updateNote} notes={notes} />
      <Footer />
    </>
  )
}

export default withApiCall()(Home)
