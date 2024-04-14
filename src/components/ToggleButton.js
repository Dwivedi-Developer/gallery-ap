import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className="  flex items-center justify-center">
      <div className="flex items-center">
        {/* Toggle Button */}
        <button
          id="toggleButton"
          className="relative w-8 h-4 max-[635px]:w-6 max-[635px]:h-3 flex items-center justify-between border-2 border-black rounded-full p-1"
          onClick={toggleButton}
        >
          {/* Circle Indicator */}
          <div
            className={`absolute w-2 h-2 bg-black rounded-full max-[635px]:w-1 max-[635px]:h-1  transform ${
              isOn ? 'translate-x-3 bg-green-500' : 'translate-x-0 bg-black'
            } transition-transform duration-300`}
          ></div>
        </button>
       
        
      </div>
    </div>
  );
};

export default ToggleButton;
