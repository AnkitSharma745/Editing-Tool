
import React from 'react';

function TextInput({ value, onChange, onAddText, reset }) {
  function changes(){
    onAddText()
     reset();
     
  }
  return (
    <div>
      <input
        type="text"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text..."
      />
      <button className="add-btn" onClick={changes}>Add Text</button>
    </div>
  );
};

export default TextInput;
