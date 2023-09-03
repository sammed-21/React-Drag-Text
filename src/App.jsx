import React, { useState } from 'react';
import ImageUploader from "./components/ImageUrls.jsx"
import TextOverlay from './components/TextOverlay.jsx';
import { Resizable } from 'react-resizable';

const App = () => {
 

const [textOverlays, setTextOverlays] = useState([]);
 
  //this is function i have tried to resize the input text

const handleResize = (index, size) => {
  const updatedOverlays = [...textOverlays];
  updatedOverlays[index].size = size;
  setTextOverlays(updatedOverlays);
};
// this is the function which set the initial value for the input text 
const addTextOverlay = () => {
  setTextOverlays([...textOverlays, { text: 'Sample', position: { x: 50, y: 50 }, size: { width: 100, height: 50 } }]);
};

return (
  <div className='section'>
    <button onClick={addTextOverlay} className="btn">Add Text Overlay</button>
    {/* component to load image */}
    <ImageUploader />
    
    <div>
      {/* text on image component */}
      {textOverlays.map((overlay, index) => (
        <Resizable
        key={index}
        width={overlay.size.width}
        height={overlay.size.height}
        onResize={(e, { size }) => {
          handleResize(e, size);
        }}
        >
          {/* take the sample test for initial view of the text box */}
          <TextOverlay
            text={overlay.text}
            position={overlay.position}
            onPositionChange={(newPosition) => {
              const updatedOverlays = [...textOverlays];
              updatedOverlays[index].position = newPosition;
              setTextOverlays(updatedOverlays);
            }}
          />
        </Resizable>
      ))}
    </div>
  </div>
);
};

export default App;