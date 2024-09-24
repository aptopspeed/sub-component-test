import React from 'react';

const SharedButton = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

export default SharedButton;