import './DarkMode.css'

import React from 'react'

const DarkMode = ({ handleChange, isChecked }) => {
  return (
    <div className='toggle-container'>
      <input type='checkbox' id='check' className='toggle' onChange={handleChange} checked={isChecked} />
      <label htmlFor='check'>Dark Mode</label>
    </div>
  )
}

export default DarkMode
