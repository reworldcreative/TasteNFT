import React, { useState } from "react";
import "./params.scss";
import RadioButtonComponent from "./RadioButton/RadioButton";
import Auction from "./Auction/Auction";
import Sale from "./Sale/Sale";

export default function Params() {
  const [selectedOption, setSelectedOption] = useState("Auction");
  const options = ["Auction", "Sale"];
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="params">
      <div className="params__textContainer">
        <div className="params__input">
          <label htmlFor="name" className="section-text_accent">
            Artwork name
          </label>
          <input className="params__inputComponent" id="name" type="text" />
        </div>
        <div className="params__input">
          <label htmlFor="description" className="section-text_accent">
            Description
          </label>
          <textarea
            className="params__inputComponent"
            id="description"
            type="text"
            rows="6"
          />
        </div>
      </div>

      <RadioButtonComponent
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
      <div className="params__copies">
        {selectedOption === "Auction" ? <Auction /> : null}
        {selectedOption === "Sale" ? <Sale sumText="Sum" /> : null}
      </div>
    </div>
  );
}
