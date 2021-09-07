import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, ...rest }) => {
  return (
    <div>
      {label && <label className="input__label">{label}</label>}
      <input {...rest} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
}

export default Input
