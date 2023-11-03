import React, { useState } from "react";
import "./swap.scss";
import backIcon from "@/img/icons/back-icon.svg";
import Button from "../../../Button/Button";
import NftBidPrice from "../../../NFTBid/NftBidPrice";

export default function Swap({
  back,
  finish,
  caption,
  currencyIcon,
  currencyText,
  buttonText,
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    }
  };
  return (
    <div className="BalanceSwap">
      <div className="BalanceSwap__head">
        <button className="BalanceSwap__backButton" onClick={back}>
          <img src={backIcon} alt="back icon arrow" width={24} height={24} />
        </button>
        <h2 className="section-title">{caption}</h2>
      </div>

      <div className="BalanceSwap__content">
        <p className="section-text_accent">You will get</p>
        <div className="BalanceSwap__value">
          <div className="bidInputPopUp">
            <div className="bidInputPopUp__input">
              <input
                type="text"
                placeholder="10000000"
                value={value}
                onChange={handleChange}
                aria-label="sum of bid"
              />
              <p className="bidInputPopUp__currency section-text_accent">
                {currencyText}
              </p>
            </div>
          </div>
          {currencyIcon ? (
            <NftBidPrice
              bidImage={currencyIcon}
              counter={"1,5M"}
              price={"(1308.54$)"}
            />
          ) : (
            <p className="section-text_accent">(1308.54$)</p>
          )}
        </div>
      </div>

      <Button onButtonClick={finish}>{buttonText}</Button>
    </div>
  );
}
