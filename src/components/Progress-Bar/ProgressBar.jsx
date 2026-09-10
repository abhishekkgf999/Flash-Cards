import React from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
  return (
    <div className='progress-bar'>
        <div className='side-bar'> 
            <span className='bar'></span>
            <span className='percentage'>100%</span>
        </div>
        <div className='total-questions'>
            5 of 20
        </div>
    </div>
  )
}

export default ProgressBar
