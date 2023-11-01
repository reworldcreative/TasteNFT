import React from "react";
import "./progressBar.scss";

export default function ProgressBar({ step }) {
  return (
    <>
      <ul className="progressBar">
        <li className={`progressBar__step ${step >= 1 ? "active" : ""}`}></li>
        <li className={`progressBar__step ${step >= 2 ? "active" : ""}`}></li>
        <li className={`progressBar__step ${step >= 3 ? "active" : ""}`}></li>
      </ul>
      <p className="section-text_accent progressBar__text">
        Step {step} from 3
      </p>
    </>
  );
}
