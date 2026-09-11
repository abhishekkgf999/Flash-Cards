import React from 'react'
import './Button.css'

const Button = ({ label, event }) => {
  return (
    <div>
      <button className="flashcard-button" onClick={event}>
        {label}
      </button>
    </div>
  );
};

export default Button
