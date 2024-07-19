import React from 'react';

function TextAlignment({ value, onChange }) {
  return (
    <select className="text-align" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="left">Left</option>
      <option value="center">Center</option>
      <option value="right">Right</option>
    </select>
  );
};

export default TextAlignment;
