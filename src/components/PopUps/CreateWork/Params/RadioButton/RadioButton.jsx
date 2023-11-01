import React, { useState } from "react";

import "./radioButton.scss";

const RadioButtonComponent = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="RadioButton">
      <h2 className="section-text_accent RadioButton__title">Type</h2>
      <div className="RadioButton__list">
        {options.map((option) => (
          <label
            key={option}
            className={`RadioButton__label section-text ${
              selectedOption === option ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="auctionOrSale"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonComponent;
