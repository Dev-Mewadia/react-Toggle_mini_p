import React, { useState } from 'react';
import './toggle_switch.css';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={toggle}>
      <div className={`switch ${isOn ? 'on' : 'off'}`}></div>
    </div>
  );
}

export default ToggleSwitch;
