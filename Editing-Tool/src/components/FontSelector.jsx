import React from "react";
function  FontSelector({ value, onChange }){
  return (
    <select className="font-selector" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="Arial">Arial</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Courier New">Courier New</option>
      <option value="Georgia">Georgia</option>
      <option value="Verdana">Verdana</option>
      <option value="Trebuchet MS">Trebuchet MS</option>
      <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
      <option value="Tahoma">Tahoma</option>
      <option value="Impact">Impact</option>
      <option value="Comic Sans MS">Comic Sans MS</option>
      <option value="Palatino Linotype">Palatino Linotype</option>
      <option value="Garamond">Garamond</option>
      <option value="Bookman">Bookman</option>
      <option value="Arial Black">Arial Black</option>
      <option value="Lucida Console">Lucida Console</option>
      <option value="Gill Sans">Gill Sans</option>
      <option value="Copperplate">Copperplate</option>
      <option value="Brush Script MT">Brush Script MT</option>
      <option value="Bodoni MT">Bodoni MT</option>
      <option value="Rockwell">Rockwell</option>
      <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
    </select>
  );
};

export default FontSelector;
