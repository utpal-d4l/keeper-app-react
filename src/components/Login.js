import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import Footer from './Footer'
import Header from './Header'
import withApiCall from '../hoc/withApiCall'
import { Login, Register } from '../api/routes'

function LoginPage({ apiCall, setLogin }) {
  const [user, setUser] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const handleUserInfo = (event) => {
    const { name, value } = event.target

    if (name === 'username') {
      setUser({ ...user, username: value })
    } else {
      setUser({ ...user, password: value })
    }
  }

  const loginOrRegister = () => {
    const request = isSignup ? Register : Login
    apiCall(() => request(user), () => setLogin(true))
  }

  return (
    <>
      <Header />
      <div className="login">
        <h1>{isSignup ? 'Signup' : 'Login'}</h1>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          name="username"
          onChange={handleUserInfo}
          required
          value={user.username}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          onChange={handleUserInfo}
          required
          value={user.password}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <button className="password-eye" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            )
          }}
        />
        <Button
          className="primary-button"
          variant="contained"
          fullWidth
          size="large"
          color="primary"
          onClick={loginOrRegister}
        >
          {isSignup ? 'SIGNUP' : 'LOGIN'}
        </Button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? 'Already have an account? Login'
            : "Don't have an account? SignUp"
          }
        </button>
      </div>
      <Footer />
    </>
  )
}

export default withApiCall()(LoginPage)
