import Button from "../../Button/Button";
import "./placeBid.scss";

import React, { useState } from "react";

export default function PlaceBid() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="bidPopup popUpContent">
      <h2 className="section-title">Place a bid</h2>

      <div className="bidPopup__content">
        <div className="bidPopup__item">
          <p className="section-text_accent">Min.sum</p>
          <div className="bidPopup__bid">
            <div className="bidPopup__input">
              <input
                type="text"
                placeholder="10000000"
                value={value}
                onChange={handleChange}
              />
              <p className="bidPopup__currency section-text_accent">TASTE</p>
            </div>
            <p className="section-text_accent">(1308.54$)</p>
          </div>
        </div>
        <Button>Place</Button>
      </div>
    </div>
  );
}
