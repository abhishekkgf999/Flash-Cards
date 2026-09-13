import Card from './components/Card/Card'
import ProgressBar from './components/Progress-Bar/ProgressBar'
import flashcards from "./assets/data/flashcard";
import { useState } from "react";

const App = () => {
  const [currentIndex, setIndex] = useState(0);
  const [isAnswerVisible, setVisible] = useState(false);
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
    <div>
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestion={flashcards.length}
      />
      <Card
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrevious={handlePrev}
        isAnswerVisible={isAnswerVisible}
        setVisible={setVisible}
      />
    </div>
  );
};

export default App
