import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <div className="loading">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only" />
      </div>
    </div>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}

export default Loading
