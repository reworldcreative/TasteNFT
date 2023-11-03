import React from "react";
import "./wallet.scss";
import Button from "../../Button/Button";
import Step from "./Step/Step";

export default function Wallet({ success }) {
  return (
    <div className="wallet">
      <h2 className="section-title">Connecting wallet</h2>
      <div className="wallet__content">
        <Step
          step={1}
          link={"https://www.youtube.com/embed/6ycaFJa4oXg"}
          description={"Описание что нужно сделать"}
        />

        <Step
          step={2}
          link={"https://www.youtube.com/embed/6ycaFJa4oXg"}
          description={"Описание что нужно сделать"}
        />
        <Step
          step={3}
          link={"https://www.youtube.com/embed/6ycaFJa4oXg"}
          description={"Описание что нужно сделать"}
        />
      </div>

      <Button onButtonClick={success}>Connect wallet</Button>
    </div>
  );
}
