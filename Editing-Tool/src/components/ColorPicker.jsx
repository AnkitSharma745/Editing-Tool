import React from 'react';
function ColorPicker({ value, onChange }){
  return (
    <>
      <label style={{ fontSize: "20px", marginTop: "30px", fontWeight: "800" }} htmlFor="color">
        Choose a color
      </label>
      <input
        id="color"
        type="color"
        className="color-picker"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default ColorPicker;
