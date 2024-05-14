import React, { useState } from "react";
import "./censor.scss";

import censorDefault from "@/img/censorDefault.jpg";
import pictureIcon from "@/img/icons/picture-icon.svg";
import blurIcon from "@/img/icons/blur-icon.svg";
import stickerIcon from "@/img/icons/sticker-icon.svg";
import CanvasComponent from "./Canvas";

export default function Censor({ image }) {
  const [clarity, setClarity] = useState(false);
  const [blur, setBlur] = useState(false);

  function choseBlur() {
    setClarity(false);
    setBlur(true);
  }

  function choseClarity() {
    setClarity(true);
    setBlur(false);
  }
  return (
    <div className="censor">
      <h2 className="section-text_accent upload__title">
        Censor the public version of artwork, if it contains 18+ content
      </h2>
      <CanvasComponent addImage={image ? image : censorDefault} filter={blur ? "blur" : clarity ? "clarity" : "none"} />
      {/* <img
        className="censor__image"
        src={image ? image : censorDefault}
        alt="created image"
      /> */}
      <ul className="censor__icons">
        <li className="censor__icon">
          <img src={pictureIcon} alt="picture icon" />
        </li>
        <li className={`censor__icon ${blur ? "active" : ""}`} onClick={choseBlur}>
          <img src={stickerIcon} alt="blur icon" />
        </li>
        <li className={`censor__icon ${clarity ? "active" : ""}`} onClick={choseClarity}>
          <img src={blurIcon} alt="color select icon" />
        </li>
      </ul>
    </div>
  );
}
