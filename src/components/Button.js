import React from 'react';

// Button component for handling button clicks
export const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};
