import React from "react";
import "./sale.scss";
import BidInput from "../../../BidInput/BidInput";

export default function Sale({ sumText }) {
  const [counter, setCounter] = useState(1);

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="sale">
      <div className="sale__copies">
        <p className="section-text_accent sale__title">Copies</p>

        <div className="counter">
          <button
            className="counter__button section-text"
            onClick={decreaseCounter}
          >
            -
          </button>
          <p className="section-text counter__number">{counter}</p>
          <button
            className="counter__button section-text"
            onClick={increaseCounter}
          >
            +
          </button>
        </div>
      </div>

      <div className="sale__sum">
        <p className="section-text_accent sale__title">{sumText}</p>
        <BidInput />
      </div>
    </div>
  );
}
