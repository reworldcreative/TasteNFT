import React from "react";
import "./header.scss";

import logo from "@/img/logo.png";
import search from "@/img/icons/search-icon.svg";
import PictureComponent from "@/../plugins/PictureComponent";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <PictureComponent
          src={logo}
          alt="logo"
          className="logo"
          width="47px"
          height="47px"
        />
      </Link>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for ..."
        />
        <img className="search__icon" src={search} alt="search icon" />
      </div>
      <Button>Connect wallet</Button>
    </header>
  );
}
