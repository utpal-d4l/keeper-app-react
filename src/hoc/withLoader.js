import React, { useState } from 'react'

import loader from '../assets/loader.gif'

const withLoader = () => (WrappedComponent) => {
  function WithLoader(props) {
    const [loading, setLoading] = useState(false)

    const apiCall = async () => {
      setLoading(true)

      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <>
        <WrappedComponent
          apiCall={apiCall}
          {...props}
        />
        {loading && (
          <div className="loader">
            <img src={loader} alt="loader" />
          </div>
        )}
      </>
    )
  }

  return WithLoader
}

export default withLoader
