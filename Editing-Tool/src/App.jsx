import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import ColorPicker from './components/ColorPicker';
import FontSelector from './components/FontSelector';
import TextAlignment from './components/TextAlignment';
import TextSize from './components/TextSize';
import Preview from './components/Preview';
import UndoRedo from './components/UndoRedo';
function App() {
  
  // State to hold text objects
  const [texts, setTexts] = useState([]);

  // State to hold the ID of the currently selected text
  const [selectedTextId, setSelectedTextId] = useState(null);
  
  // State to hold the input text value
  const [inputValue, setInputValue] = useState('');
  
  // State to hold the selected color, font, alignment, and size
  const [color, setColor] = useState('#000000');
  const [font, setFont] = useState('Arial');
  const [alignment, setAlignment] = useState('left');
  const [size, setSize] = useState(16);
  
  // State to manage the undo/redo history
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);


// Function to generate unique id for selection
     
function generateUniqueId(){
  return  Math. floor(Math. random() * (9999999999 - 1000000000 + 1)) + 1000000000
}
  // Function to save the current state to history for undo/redo functionality
  const saveState = () => {
    const newHistory = [...history.slice(0, currentIndex + 1), texts];
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
  };

  // Function to handle clicking on a text element
  const handleTextClick = (id) => {
    setSelectedTextId(id);
  };

  // Function to handle changes to the text content
  // const handleTextChange = (newText) => {
  //   const updatedTexts = texts.map((text) =>
  //     text.id === selectedTextId ? { ...text, content: newText } : text
  //   );
  //   setTexts(updatedTexts);
  //   saveState();
  // };

  // Function to handle changes to the text color
  const handleColorChange = (newColor) => {
    const updatedTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, color: newColor } : text
    );
    setTexts(updatedTexts);
    setColor(newColor);
    saveState();
  };

  // Function to handle changes to the font
  const handleFontChange = (newFont) => {
    const updatedTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, font: newFont } : text
    );
    setTexts(updatedTexts);
    setFont(newFont);
    saveState();
  };

  // Function to handle changes to the text alignment
  const handleAlignmentChange = (newAlignment) => {
    const updatedTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, alignment: newAlignment } : text
    );
    setTexts(updatedTexts);
    setAlignment(newAlignment);
    saveState();
  };

  // Function to handle changes to the text size
  const handleSizeChange = (newSize) => {
    const updatedTexts = texts.map((text) =>
      text.id === selectedTextId ? { ...text, size: newSize } : text
    );
    setTexts(updatedTexts);
    setSize(newSize);
    saveState();
  };

  // Function to undo the last action
  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTexts(history[currentIndex - 1]);
    }
  };

  // Function to redo the last undone action
  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTexts(history[currentIndex + 1]);
    }
  };

  // Function to reset styles to default values
  const resetStyles = () => {
    setInputValue('');
    setColor('#000000');
    setFont('Arial');
    setAlignment('left');
    setSize(16);
    console.log("reset is working ")

  };

  // Function to add a new text element
  const handleAddText = () => {
    const newText = {
      id: generateUniqueId(),
      content: inputValue,
      color,
      font,
      alignment,
      size,
    };
    
    // Add the new text to the array
    const newTexts = [...texts, newText];
    setTexts(newTexts);
    
    // Set the newly added text as the selected text
    setSelectedTextId(newText.id);
    
    // Save the current state
    saveState();

    // Reset styles to default values
    resetStyles();
  };

  // Effect to update the input and properties when a text is selected
  useEffect(() => {
    if (selectedTextId) {
      const selectedText = texts.find((text) => text.id === selectedTextId);
      if (selectedText) {
        setInputValue(selectedText.content);
        setColor(selectedText.color);
        setFont(selectedText.font);
        setAlignment(selectedText.alignment);
        setSize(selectedText.size);
      }
    } else {
      // Reset styles to default values if no text is selected
      resetStyles();
    }
  }, [selectedTextId, texts]);

  return (
    <div className="app">
      <div className="undo-redo-control">
        <UndoRedo
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={currentIndex > 0}
          canRedo={currentIndex < history.length - 1}
        />
      </div>
      <div className="editor">
        <div className="controls">
          <TextInput value={inputValue} onChange={setInputValue} reset={resetStyles}  onAddText={handleAddText} />
          <ColorPicker value={color} onChange={handleColorChange} />
          <FontSelector value={font} onChange={handleFontChange} />
          <TextAlignment value={alignment} onChange={handleAlignmentChange} />
          <TextSize value={size} onChange={handleSizeChange} />
        </div>
        <Preview texts={texts} onTextClick={handleTextClick} />
      </div>
    </div>
  );
}

export default App;