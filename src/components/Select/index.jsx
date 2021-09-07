import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, options, ...rest }) => {
  return (
    <div>
      {label && <label className="input__label">{label}</label>}
      <select className="form-select" {...rest}>
        {options?.map((item, index) => (
          <option key={index} value={item?.value}>
            {item?.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Select
