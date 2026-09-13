import Button from '../Button/Button'
import './Card.css'
import flashcards from '../../assets/data/flashcard'
import { useState } from "react";

const Card = ({
  currentIndex,
  onNext,
  onPrevious,
  isAnswerVisible,
  setVisible,
}) => {
  const currentFlashCard = flashcards[currentIndex];
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
        <Button label="< Prev" event={onPrevious} />
        <Button
          label={isAnswerVisible ? "Hide Answer" : "Show Answer"}
          event={() => setVisible(!isAnswerVisible)}
        />
        <Button label="Next >" event={onNext} />
      </div>
    </div>
  );
};

export default Card
