import React from 'react'
import Button from '../Button/Button'
import './Card.css'
import flashcards from '../../assets/flashcard'

const Card = () => {
  const currentFlashCard = flashcards[0];
  return (
    <div className='flash-card'>
        <div className='question-answer'>
            <p>{currentFlashCard.question}</p>
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
