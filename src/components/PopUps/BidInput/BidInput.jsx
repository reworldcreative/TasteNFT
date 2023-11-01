import React, { useState } from "react";
import "./bidInput.scss";

export default function BidInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    }
  };
  return (
    <div className="bidInputPopUp">
      <div className="bidInputPopUp__input">
        <input
          type="text"
          placeholder="10000000"
          value={value}
          onChange={handleChange}
          aria-label="Min.sum of bid"
        />
        <p className="bidInputPopUp__currency section-text_accent">TASTE</p>
      </div>
      <p className="section-text_accent">(1308.54$)</p>
    </div>
  );
}
