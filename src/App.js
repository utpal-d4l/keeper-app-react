import React, { useEffect, useState } from 'react'

import Home from './components/Home'
import Login from './components/Login'
import withApiCall from './hoc/withApiCall'
import { CheckToken, Logout } from './api/routes'

function App({ apiCall }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  useEffect(() => {
    apiCall(CheckToken, () => setIsLoggedIn(true), () => setIsLoggedIn(false), false)
  }, [])

  const logout = () => apiCall(Logout, () => setIsLoggedIn(false))

  if (isLoggedIn === null) {
    return null
  }

  return isLoggedIn
    ? <Home logout={logout} />
    : <Login setLogin={setIsLoggedIn} />
}

export default withApiCall()(App)
