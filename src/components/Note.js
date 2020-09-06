import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import DateFnsUtils from '@date-io/moment'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

// import AddAlertIcon from '@material-ui/icons/AddAlert'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot'
import TurnedInOutlinedIcon from '@material-ui/icons/TurnedInOutlined'

const Note = ({ _id, isPinned, title, text, deleteNote, updateNote }) => {
  const [selectedDate, handleDateChange] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [updatedNote, setUpdatedNote] = useState({ title, text })

  const handleDelete = () => deleteNote(_id)

  const showDeletePopup = () => setShowDelete(true)

  const hideDeletePopup = () => setShowDelete(false)

  const showEditPopup = () => setShowEdit(true)

  const hideEditPopup = () => setShowEdit(false)

  // const showDatePopup = () => setShowDate(true)

  const hideDatePopup = () => setShowDate(false)

  const handleUpdate = (update) => {
    updateNote({ id: _id, update })
    hideEditPopup()
  }

  const updateNoteValue = (event) => {
    const { id, value } = event.target

    if (id === 'title') {
      setUpdatedNote(note => ({ ...note, title: value }))
    } else {
      setUpdatedNote(note => ({ ...note, text: value }))
    }
  }

  return (
    <div className={`note ${isPinned ? 'pinned' : ''}`}>
      <h1>{title}</h1>
      <p>{text}</p>
      <button type="button" title="Delete" onClick={showDeletePopup}>
        <DeleteIcon />
      </button>
      {/* <button type="button" title="Reminder" onClick={showDatePopup}>
        <AddAlertIcon />
      </button> */}
      <button type="button" title="Edit" onClick={showEditPopup}>
        <EditIcon />
      </button>
      <button type="button" title="Highlight" onClick={() => handleUpdate({ isPinned: !isPinned })}>
        {isPinned ? <TurnedInOutlinedIcon /> : <TurnedInNotIcon />}
      </button>
      <Dialog onClose={hideDeletePopup} open={showDelete}>
        <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
        <DialogActions>
          <Button color="secondary" onClick={handleDelete}>Confirm</Button>
          <Button color="primary" onClick={hideDeletePopup}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog onClose={hideEditPopup} open={showEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id="title"
            label="Title"
            margin="dense"
            onChange={updateNoteValue}
            type="text"
            value={updatedNote.title}
          />
          <TextField
            autoFocus
            fullWidth
            id="text"
            label="Note"
            margin="dense"
            onChange={updateNoteValue}
            type="text"
            value={updatedNote.text}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={hideEditPopup}>Cancel</Button>
          <Button
            color="primary"
            disabled={text === updatedNote.text && title === updatedNote.title}
            onClick={() => handleUpdate(updatedNote)}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          variant="dialog"
          open={showDate}
          TextFieldComponent={() => null}
          onClose={hideDatePopup}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default Note
