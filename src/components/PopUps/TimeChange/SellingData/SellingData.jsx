import React, { useState } from "react";
import "./sellingData.scss";
import closeIcon from "@/img/icons/close-icon.svg";

export default function SellingData() {
  const [DataValue, setDataValue] = useState("");
  const [TimeValue, setTimeValue] = useState("");

  const ChangeData = (e) => {
    const inputValue = e.target.value;
    if (/^[\d.]*$/.test(inputValue)) {
      setDataValue(inputValue);
    }
  };

  const ChangeTime = (e) => {
    const inputValue = e.target.value;
    if (/^[\d:]*$/.test(inputValue)) {
      setTimeValue(inputValue);
    }
  };
  return (
    <div className="bidPopup__bid">
      <div className="bidPopup__input data">
        <input
          type="text"
          placeholder="22.02.2020"
          value={DataValue}
          onChange={ChangeData}
          aria-label="auction end date"
        />
      </div>
      <div className="bidPopup__input time">
        <input
          type="text"
          placeholder="23:45"
          value={TimeValue}
          onChange={ChangeTime}
          aria-label="auction end time"
        />
      </div>
      <p className="section-text_accent">05h 02m 41s</p>
      <button className="section-text timeChange__text delete">
        <img src={closeIcon} alt="close icon" width={11} height={10.37} />
        {/* <p className="timeChange__text"> */}
        delete file
        {/* </p> */}
      </button>
    </div>
  );
}
