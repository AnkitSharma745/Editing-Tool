
import React from 'react';

function  UndoRedo({ onUndo, onRedo, canUndo, canRedo }){
  return (
    <div className="undo-redo">
      <button onClick={onUndo} disabled={!canUndo}>Undo</button>
      <button onClick={onRedo} disabled={!canRedo}>Redo</button>
    </div>
  );
};

export default UndoRedo;
