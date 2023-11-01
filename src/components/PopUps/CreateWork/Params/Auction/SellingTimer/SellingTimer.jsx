import React, { useState } from "react";
import "./sellingTimer.scss";
import TimeChange from "../../../../TimeChange/TimeChange";
import SellingData from "../../../../TimeChange/SellingData/SellingData";

export default function SellingTimer() {
  const [timer, setTimer] = useState(false);

  const showTimerChange = () => {
    setTimer(true);
  };
  return (
    <div className="sellingTimer">
      <p className="section-text_accent">Selling will end</p>
      {!timer && (
        <button
          className="section-text_accent sellingTimer__timerButton"
          onClick={showTimerChange}
        >
          Set timer
        </button>
      )}

      {timer && <SellingData />}
    </div>
  );
}
