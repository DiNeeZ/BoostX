import React from 'react'

import './button.scss';

const Button = ({ children, shadow, size, ...otherProps }) => {

  const sizes = {
    md: 'md',
    lg: 'lg'
  }

  return (
    <button
      {...otherProps}
      className={`btn-reset btn ${otherProps.className} ${shadow ? 'btn--shadow' : ''} ${size ? `btn--${sizes[size]}` : ''}`}>
      {children}
    </button>
  )
}

export default Button