import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React, { useState } from 'react'

const Header = ({ logout }) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)

  const handleLogout = () => logout()

  const handlePopup = () => setShowLogoutPopup(!showLogoutPopup)

  return (
    <header>
      <h1>Keeper</h1>
      {!!logout && (
        <button
          className="logout-button button-common"
          onClick={handlePopup}
          type="button"
        >
          <ExitToAppIcon />
        </button>
      )}
      <Dialog onClose={handlePopup} open={showLogoutPopup}>
        <DialogTitle>Are you sure you want to logout?</DialogTitle>
        <DialogActions>
          <Button color="secondary" onClick={handleLogout}>Logout</Button>
          <Button color="primary" onClick={handlePopup}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </header>
  )
}

export default Header
