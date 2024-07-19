import React from 'react';

function  Preview({ texts, onTextClick }){
  return (
    <div className="preview">
      {texts.map((text) => (
        <div
          key={text.id}
          style={{
            color: text.color,
            fontFamily: text.font,
            textAlign: text.alignment,
            fontSize: `${text.size}px`,
            cursor: 'pointer',
          }}
          onClick={() => onTextClick(text.id)}
        >
          {text.content}
        </div>
      ))}
    </div>
  );
};

export default Preview;
