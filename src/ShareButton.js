import React from 'react';

const SharedButton = ({ text, onClick }) => (
  <>
  <h1 style={{color: "red"}}>{text}</h1>
  <button onClick={onClick}>{text}</button>
  </>
);

export default SharedButton;