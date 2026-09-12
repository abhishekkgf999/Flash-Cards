import Button from '../Button/Button'
import './Card.css'
import flashcards from '../../assets/data/flashcard'
import { useState } from "react";

const Card = () => {
  const [isAnswerVisible, setVisible] = useState(false);
  const [currentIndex, setIndex] = useState(0);
  const currentFlashCard = flashcards[currentIndex];
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIndex(currentIndex + 1);
      setVisible(false);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
      setVisible(false);
    }
  };
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
        <Button label="< Prev" event={handlePrev} />
        <Button
          label={isAnswerVisible ? "Hide Answer" : "Show Answer"}
          event={() => setVisible(!isAnswerVisible)}
        />
        <Button label="Next >" event={handleNext} />
      </div>
    </div>
  );
};

export default Card
