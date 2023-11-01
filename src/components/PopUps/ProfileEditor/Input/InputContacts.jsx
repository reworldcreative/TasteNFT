import React from "react";

export default function InputContacts({
  label,
  register,
  required,
  id,
  image,
}) {
  return (
    <li className="inputContacts">
      <label className="section-text inputContacts__label" htmlFor={id}>
        <img src={image} alt="social icon" width={20} height={20} />
        <span>{label}</span>
      </label>
      <input className="userInput" id={id} {...register(label, { required })} />
    </li>
  );
}
