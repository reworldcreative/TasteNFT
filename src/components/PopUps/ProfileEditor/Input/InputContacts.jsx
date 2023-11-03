import React from "react";

export default function InputContacts({
  label,
  register,
  required,
  pattern,
  id,
  image,
  errors,
}) {
  return (
    <>
      <li className="inputContacts">
        <label className="section-text inputContacts__label" htmlFor={id}>
          <img src={image} alt="social icon" width={20} height={20} />
          <span>{label}</span>
        </label>
        <input
          className="userInput"
          id={id}
          {...register(label, {
            pattern: {
              value: pattern,
              message: "invalid link",
            },
          })}
        />
      </li>
      {errors[label] && <p className="errorMessage">{errors[label].message}</p>}
    </>
  );
}
