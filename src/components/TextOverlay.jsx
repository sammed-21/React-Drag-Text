import React from "react";
import Draggable from "react-draggable";
 
const TextOverlay = ({ text, position, onPositionChange }) => {
  const handleDrag = (e, dragData) => {
    // calculate the new position based on the dragData
    const newPosition = {
      x: dragData.x,
      y: dragData.y,
    };
    
    // call the onPositionChange callback with the new position
    onPositionChange(newPosition);
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      {/* react draggable package */}
      <div
        className="text-overlay"
        style={{
           
          position: "absolute",
          cursor: "move",
          zIndex: "100",
        }}
      >
        {/*initial text of input tag */}
        <input
          defaultValue={text}
         
          className="inputs"
        />
      </div>
    </Draggable>
  );
};

export default TextOverlay;