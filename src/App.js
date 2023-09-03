import React, { useState } from 'react';
import ImageUploader from "./components/ImageUrls.jsx"
import TextOverlay from './components/TextOverlay.jsx';

const App = () => {
  const [textOverlays, setTextOverlays] = useState([]);
  const [selectedOverlay, setSelectedOverlay] = useState(null);

  // const handlePositionChange = (e, data) => {
  //    const updatedOverlays = [...textOverlays];
  //   updatedOverlays[selectedOverlay] = {
  //     ...updatedOverlays[selectedOverlay],
  //     position: { x: data.x, y: data.y },
  //   };
  //   setTextOverlays(updatedOverlays);
  // };

  const addTextOverlay = () => {
    setTextOverlays([...textOverlays, { text: 'Sample Text', position: { x: 50, y: 50 } }]);
  };
  const [position, setPosition] = useState({ x: 10, y: 10 });

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className='section' >
      <button onClick={addTextOverlay} className="btn">Add Text Overlay</button>
      <ImageUploader />
      <div >
        {textOverlays.map((overlay, index) => (
          <TextOverlay
            key={index}
            text={overlay.text}
            position={position}
            onPositionChange={(e, data) => {
              setSelectedOverlay(index);
              handlePositionChange(e, data);
            }}
       
          />
        ))}
      </div>
    </div>
  );
};

export default App;
