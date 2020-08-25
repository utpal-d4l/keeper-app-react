import React, { useState } from 'react'

import loader from '../assets/loader.gif'

const withLoader = () => (WrappedComponent) => {
  function WithLoader(props) {
    const [loading, setLoading] = useState(false)

    const apiCall = async (req) => {
      setLoading(true)
      const res = await req()

      setLoading(false)
      return res
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
