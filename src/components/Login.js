import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import Footer from './Footer'
import Header from './Header'
import withApiCall from '../hoc/withApiCall'
import { CheckExistingUser, Login, Register } from '../api/routes'

function LoginPage({ apiCall, setLogin }) {
  const [user, setUser] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [isExistingUser, setIsExistingUser] = useState(null)
  const [isUserFocused, setIsUserFocused] = useState(false)

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

  const checkExistingUser = async () => {
    setIsUserFocused(false)
    const res = await apiCall(() => CheckExistingUser({ username: user.username }), undefined, undefined, false, false)
    setIsExistingUser(res === 'Exist')
  }

  const helperTextLoginVisibility = !!user.username && !isUserFocused && !isSignup && (typeof isExistingUser === 'boolean' && !isExistingUser)
  const helperTextSignupVisibility = !!user.username && !isUserFocused && isSignup && (typeof isExistingUser === 'boolean' && isExistingUser)

  return (
    <>
      <Header />
      <div className="login">
        <h1>{isSignup ? 'Signup' : 'Login'}</h1>
        <TextField
          onFocus={() => {
            setIsUserFocused(true)
            setIsExistingUser(null)
          }}
          fullWidth
          label="Username"
          error={helperTextLoginVisibility || helperTextSignupVisibility}
          margin="normal"
          name="username"
          onBlur={checkExistingUser}
          onChange={handleUserInfo}
          required
          value={user.username}
          variant="outlined"
          helperText={(
            <>
              {helperTextSignupVisibility && '*User already exists. Login or signup with a different username.'}
              {helperTextLoginVisibility && '*User is not registered. Signup instead.'}
            </>
          )}
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
              <button className="password-eye button-common" type="button" onClick={() => setShowPassword(!showPassword)}>
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
          className="secondary-button button-common"
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
