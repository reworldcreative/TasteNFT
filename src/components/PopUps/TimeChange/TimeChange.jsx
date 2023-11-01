import React, { useState } from "react";
import Button from "../../Button/Button";
import "./timeChange.scss";

import SellingData from "./SellingData/SellingData";

export default function TimeChange({ finish }) {
  return (
    <div className="bidPopup timeChange popUpContent">
      <h2 className="section-title">Changing ending time</h2>

      <div className="bidPopup__content">
        <div className="bidPopup__item">
          <p className="section-text_accent">Selling will end</p>

          <SellingData />
        </div>
        <Button onButtonClick={finish}>Change</Button>
      </div>
    </div>
  );
}
