import React, { useState } from "react";
import "./balance.scss";
import currencyLogo1 from "@/img/tasteNFT_logo_2.jpg";
import currencyLogo2 from "@/img/currency_logo.jpg";
import PictureComponent from "@/../plugins/PictureComponent";
import PopUpWrapper from "../../PopUps/PopUpWrapper";
import Swap from "./Swap/Swap";
import currencyicon from "@/img/tasteNFT_logo_2.jpg";

export default function Balance({ finish }) {
  const [isSwapOpen, setIsSwapOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [currencyIcon, setcurrencyIcon] = useState("");
  const [currencyText, setcurrencyText] = useState("");
  const [buttonText, setbuttonText] = useState("");

  const PopUpSwapOpenButtonClick = () => {
    setIsSwapOpen(!isSwapOpen);
  };

  const PopUpSwapToTASTE = () => {
    setCaption("Swap to TASTE");
    setcurrencyText("TASTE");
    setbuttonText("Swap");
    setcurrencyIcon(null);
    PopUpSwapOpenButtonClick();
  };
  const PopUpWithdraw = () => {
    setCaption("Withdraw");
    setcurrencyText("BNB");
    setbuttonText("Confirm");
    setcurrencyIcon(currencyicon);
    PopUpSwapOpenButtonClick();
  };

  const PopUpDepositToBNB = () => {
    setCaption("Deposit to BNB");
    setcurrencyText("BNB");
    setbuttonText("Deposit");
    setcurrencyIcon(currencyicon);
    PopUpSwapOpenButtonClick();
  };

  const PopUpSwapToBNB = () => {
    setCaption("Swap to BNB");
    setcurrencyText("BNB");
    setbuttonText("Confirm");
    setcurrencyIcon(currencyicon);
    PopUpSwapOpenButtonClick();
  };
  return (
    <div className="balance popUpContent">
      <PopUpWrapper
        isOpenPopUp={isSwapOpen}
        toggleModal={PopUpSwapOpenButtonClick}
      >
        <Swap
          back={PopUpSwapOpenButtonClick}
          finish={finish}
          caption={caption}
          currencyIcon={currencyIcon}
          currencyText={currencyText}
          buttonText={buttonText}
        />
      </PopUpWrapper>
      <h2 className="section-title">Balance settings</h2>

      <div className="balance__content">
        <div className="balance__list">
          <div className="balance__item">
            <div className="balance__currency">
              <PictureComponent
                src={currencyLogo1}
                width="32"
                height="32"
                alt="currency logo"
                className="balance__logo"
              />
              <p className="section-title">1.5M</p>
            </div>
            <div className="balance__buttons">
              <button
                className="balance__swapButton section-text"
                onClick={PopUpWithdraw}
              >
                Withdraw
              </button>
            </div>
          </div>

          <div className="balance__item">
            <div className="balance__currency">
              <PictureComponent
                src={currencyLogo2}
                width="32"
                height="32"
                alt="currency logo"
                className="balance__logo"
              />
              <p className="section-title">1.5M</p>
            </div>
            <div className="balance__buttons">
              <button
                className="balance__swapButton section-text"
                onClick={PopUpSwapToTASTE}
              >
                Swap to TASTE
              </button>
              <button
                className="balance__swapButton section-text"
                onClick={PopUpDepositToBNB}
              >
                Deposit
              </button>
              <button
                className="balance__swapButton section-text"
                onClick={PopUpSwapToBNB}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
