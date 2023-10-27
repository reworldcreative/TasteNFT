import React, { useState } from "react";
import "./checkboxSelectors.scss";

export default function CheckboxSelectors({ titles }) {
  const [checkedIndex, setCheckedIndex] = useState(0);

  const handleCheckboxChange = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(null);
    } else {
      setCheckedIndex(index);
    }
  };
  return (
    <div className="checkboxSelectors">
      {titles.map((title, index) => (
        <label
          key={index}
          className={`checkboxSelectors__selector ${
            checkedIndex === index ? "active" : ""
          }`}
          onClick={() => handleCheckboxChange(index)}
        >
          {title}
        </label>
      ))}
    </div>
  );
}
