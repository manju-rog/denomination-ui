import React from "react";

function ClearButton({ onClear }) {
  return (
    <button className="clear-button" onClick={onClear}>
      Clear
    </button>
  );
}

export default ClearButton;
