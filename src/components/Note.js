import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

import AddAlertIcon from '@material-ui/icons/AddAlert'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const Note = ({ _id, title, text, deleteNote }) => {
  const [showDelete, setShowDelete] = useState(false)

  const handleClose = () => setShowDelete(false)

  const handleDelete = () => deleteNote(_id)

  const handleDeleteAction = () => setShowDelete(true)

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{text}</p>
      <button type="button" onClick={handleDeleteAction}>
        <DeleteIcon />
      </button>
      <button type="button">
        <AddAlertIcon />
      </button>
      <button type="button">
        <EditIcon />
      </button>
      <button type="button">
        <CheckCircleIcon />
      </button>
      <Dialog
        open={showDelete}
        onClose={handleClose}
      >
        <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete} color="secondary">
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Note
