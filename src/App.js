import React, { useEffect, useState } from 'react'

import CreateNote from './components/CreateNote'
import Footer from './components/Footer'
import Header from './components/Header'
import withLoader from './hoc/withLoader'
import DisplayNote from './components/DisplayNote'
import Http from './utils/httpUtils'

import { CREATE_NOTE, DELETE_NOTE, GET_NOTES } from './api/endpoints'

function App({ apiCall }) {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({ title: '', text: '' })

  const getNotes = async () => {
    const request = Http.request(Http.GET, GET_NOTES)
    const res = await apiCall(request)

    if (res) {
      setNotes(res)
    }
  }

  useEffect(() => {
    getNotes()
  }, [])

  const addNote = noteItem => setNote(noteItem)

  const createNote = () => {
    const request = Http.request(Http.POST, CREATE_NOTE, note, getNotes)
    apiCall(request)
    setNote({ title: '', text: '' })
  }

  const deleteNote = (id) => {
    const request = Http.request(Http.POST, DELETE_NOTE, { id }, getNotes)
    apiCall(request)
  }

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} createNote={createNote} note={note} />
      <DisplayNote deleteNote={deleteNote} notes={notes} />
      <Footer />
    </>
  )
}

export default withLoader()(App)
