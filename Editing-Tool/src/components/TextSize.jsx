import React from 'react';

function TextSize({ value, onChange }) {
  return (
    <input
      type="number"
      className="font-size"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Text size..."
    />
  );
};

export default TextSize;
