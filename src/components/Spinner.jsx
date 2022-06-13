import React from 'react'
import spinner from '../images/Spin.gif'
import './index.css'

const Spinner = () => {
  return (
    <div className="spinnerContainer">
        <img className="spinner" src={spinner} alt="Spinner" />
    </div>
  )
}

export default Spinner