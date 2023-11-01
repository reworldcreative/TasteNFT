import Button from "../../Button/Button";
import BidInput from "../BidInput/BidInput";
import "./placeBid.scss";

import React, { useState } from "react";

export default function PlaceBid({ onPlaceBid }) {
  return (
    <div className="bidPopup popUpContent">
      <h2 className="section-title">Place a bid</h2>

      <div className="bidPopup__content">
        <div className="bidPopup__item">
          <p className="section-text_accent">Min.sum</p>
          <BidInput />
        </div>
        <Button onButtonClick={onPlaceBid}>Place</Button>
      </div>
    </div>
  );
}
