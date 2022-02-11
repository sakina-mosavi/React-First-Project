import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
   
  return (
     <button className='btn' style={{ backgroundColor: color }}> Add </button> 
  )
}


Button.defaultProbs = {
    color: "steelblue",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button;
