import React from "react";

function InputBox({ amount, setAmount, onCalculate }) {
  return (
    <div className="input-section">
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={onCalculate}>Calculate</button>
    </div>
  );
}

export default InputBox;
