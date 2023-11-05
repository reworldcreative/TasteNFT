import React from "react";
import "./header.scss";

import logo from "@/img/logo.png";
import search from "@/img/icons/search-icon.svg";
import clear from "@/img/icons/close-icon.svg";
import PictureComponent from "@/../plugins/PictureComponent";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header({ children }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearSearch = () => {
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // window.location.href = "#/search";
      window.location.href =
        window.location.origin + window.location.pathname + "#/search";
    }
  };
  return (
    <header className="header">
      <Link to={"/"}>
        <PictureComponent
          src={logo}
          alt="logo"
          className="logo"
          width="47"
          height="47"
        />
      </Link>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for ..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <img className="search__icon" src={search} alt="search icon" />
        {inputValue ? (
          <button className="search__clear" onClick={clearSearch}>
            <img className="search__icon" src={clear} alt="clear icon" />
            <span className="search__clear-text section-text_accent">
              Clear
            </span>
          </button>
        ) : null}
      </div>
      {children}
      {/* <Button>Connect wallet</Button> */}
    </header>
  );
}
