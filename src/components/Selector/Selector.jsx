import React, { useState, useEffect } from "react";
import "./selector.scss";

export default function Selector({ id, options, onSelect }) {
  return (
    <select
      id={id}
      className="selector"
      onChange={(event) => onSelect(event.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
