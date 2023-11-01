import React from "react";
import "./cardStat.scss";

export default function CardStat({ text }) {
  let classNameStatus = "";

  if (text === "Approved") {
    classNameStatus = "approved";
  } else if (text === "On moderation") {
    classNameStatus = "moderation";
  } else if (text === "Declined") {
    classNameStatus = "declined";
  }
  return (
    <div className="cardStat">
      <p className={`cardStat__status section-text ${classNameStatus}`}>
        {text}
      </p>
    </div>
  );
}
