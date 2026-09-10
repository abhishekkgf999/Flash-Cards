import React from 'react'
import Button from '../Button/Button'
import './Card.css'

const Card = () => {
  return (
    <div className='flash-card'>
        <div className='question-answer'>
            <p>This contains question and answer</p>
        </div>
        <div className='button'>
            <Button label = "< Prev"/>
            <Button label = "Show Answer"/>
            <Button label = "Next >"/>
        </div>
    </div>
  )
}

export default Card
