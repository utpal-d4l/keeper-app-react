import Alert from '@material-ui/lab/Alert'
import React, { useState } from 'react'

import loader from '../assets/loader.gif'

const withApiCall = () => (WrappedComponent) => {
  function WithApiCall(props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const apiCall = async (
      req,
      successCallback = () => null,
      failureCallback = () => null,
      showError = true,
      showLoader = true
    ) => {
      showLoader && setLoading(true)
      const res = await req()
      showLoader && setLoading(false)

      // if there is no response
      if (!res) {
        setError('Server Error!')
        setTimeout(() => setError(null), 3000)
        failureCallback()
        return null
      }

      // if failure response
      const errorStatus = String(res?.status || '')
      if (errorStatus.startsWith('4') || errorStatus.startsWith('5')) {
        if (showError) {
          setError(res.data)
          setTimeout(() => setError(null), 3000)
        }
        failureCallback()
        return null
      }

      // if success response
      successCallback()
      return res
    }

    return (
      <>
        <WrappedComponent
          apiCall={apiCall}
          {...props}
        />
        {!!error && (
          <div className="error-container">
            <Alert severity="error" variant="filled">{error}</Alert>
          </div>
        )}
        {loading && (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        )}
      </>
    )
  }

  return WithApiCall
}

export default withApiCall
