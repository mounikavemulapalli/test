import React from 'react';
import './step.css';

const Button = ({ text, onClick }) => {
  return (
    <button className='access-button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
