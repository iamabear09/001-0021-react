import React, {useState} from 'react';
import './AppXY.css';

export default function AppXY() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });

    setPosition((prev) => ({x: e.clientX, y: prev.y}));
    // setPosition((prev) => ({...prev, x: e.clientX}));

  };


  return (
    <div className='container' onPointerMove={handlePointerMove}>
      <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}
