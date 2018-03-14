import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({children, top, right, bottom, left, inline, className}) => {
  const style = {}

  if (top) {
    style.marginTop = top * 12 + 'px'
  }

  if (right) {
    style.marginRight = right * 12 + 'px'
  }

  if (bottom) {
    style.marginBottom = bottom * 12 + 'px'
  }

  if (left) {
    style.marginLeft = left * 12 + 'px'
  }

  if (inline) {
    style.display = 'inline-block'
  }

  return (
    <div style={style} className={className}>
      {children}
    </div>
  )
}

Spacer.propTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  inline: PropTypes.bool,
  className: PropTypes.string
}

Spacer.defaultProps = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  inline: false
}

export default Spacer
