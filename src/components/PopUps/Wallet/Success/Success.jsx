import React from "react";
import "./success.scss";
import PictureComponent from "../../../../../plugins/PictureComponent";
import successIcon from "@/img/success_icon.jpg";

export default function Success() {
  return (
    <div className="success">
      <h2 className="section-title">Connecting wallet</h2>
      <div className="success__content">
        <PictureComponent
          src={successIcon}
          width="60"
          height="60"
          alt="success icon"
          className="success__icon"
        />
        <p className="section-text">Initializing</p>
      </div>
    </div>
  );
}
