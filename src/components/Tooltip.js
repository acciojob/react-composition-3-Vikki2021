// Tooltip.js
import React, { useState } from "react";
import "../styles/App.css"; // assuming styles are inside App.css

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
