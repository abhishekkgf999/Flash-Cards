import React from 'react'
import Button from '../Button/Button'
import './Card.css'
import flashcards from '../../assets/flashcard'
import { useState } from "react";

const Card = () => {
  const currentFlashCard = flashcards[0];
  const [isAnswerVisible, setVisible] = useState(false);
  return (
    <div className="flash-card">
      <div className="question-answer">
        {isAnswerVisible ? (
          <p>{currentFlashCard.answer}</p>
        ) : (
          <p>{currentFlashCard.question}</p>
        )}
      </div>
      <div className="button">
        <Button label="< Prev" />
        <Button
          label={isAnswerVisible ? "Hide Answer" : "Show Answer"}
          event={() => setVisible(!isAnswerVisible)}
        />
        <Button label="Next >" />
      </div>
    </div>
  );
};

export default Card
