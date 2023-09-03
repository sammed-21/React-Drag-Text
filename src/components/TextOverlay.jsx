import React from "react";
import Draggable from "react-draggable";

// const TextOverlay = ({ text, position, onPositionChange }) => {
//   return (
//     <Draggable position={position} onStop={onPositionChange}>
//       <div
//         className="text-overlay"
//         style={{ position: "absolute", cursor: "move",zIndex:"100" }}
//       >
//         <input
//           defaultValue={text}
//           style={{
//             background: "transparent",
//             color: "white",
//             padding:"0px 10px",
//             fontSize: "49px",
//             width:"fit-content",
//             fontWeight: "bold",
//             // resize:"both"
//           }}
//           className="inputs"
//         />
//       </div>
//     </Draggable>
//   );
// };

// export default TextOverlay;


// const TextOverlay = ({ text, position, onPositionChange }) => {
//   const handleDrag = (e, dragData) => {
//     // Calculate the new position based on the dragData
//     const newPosition = {
//       x: dragData.x,
//       y: dragData.y,
//     };
    
//     // Call the onPositionChange callback with the new position
//     onPositionChange(newPosition);
//   };

//   return (
//     <Draggable position={position} onDrag={handleDrag}>
//       <div
//         className="text-overlay"
//         style={{
//           position: "absolute",
//           cursor: "move",
//           zIndex: "100",
//         }}
//       >
//         <input
//           defaultValue={text}
//           style={{
//             background: "transparent",
//             color: "white",
//             padding: "0px 10px",
//             fontSize: "49px",
//             width: "fit-content",
//             fontWeight: "bold",
//           }}
//           className="inputs"
//         />
//       </div>
//     </Draggable>
//   );
// };

// export default TextOverlay;



// import React, { useState } from "react";
// import Draggable from "react-draggable";

const TextOverlay = ({ text, position, onPositionChange }) => {
  const handleDrag = (e, data) => {
    const newPosition = {
      x: data.x,
      y: data.y,
    };
    onPositionChange(newPosition);
  };

  return (
    <Draggable position={position} onDrag={handleDrag}>
      <div
        className="text-overlay"
        style={{
          position: "absolute",
          cursor: "move",
        }}
      >
        <input
          defaultValue={text}
          style={{
            background: "transparent",
            color: "white",
            padding: "0px 10px",
            fontSize: "49px",
            width: "fit-content",
            fontWeight: "bold",
          }}
          className="inputs"
        />
      </div>
    </Draggable>
  );
};

export default TextOverlay;
