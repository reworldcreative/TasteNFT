import React from "react";
import "./step.scss";

export default function Step({ step, link, description }) {
  return (
    <div className="step">
      <div className="step__counter section-text">{step}.</div>
      <div className="step__video">
        <iframe
          width="560"
          height="315"
          src={link}
          title="YouTube video instruction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="step__description section-text" lang="ru">
        {description}
      </p>
    </div>
  );
}
