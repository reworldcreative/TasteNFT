import React from "react";
import "./auction.scss";
import Sale from "../Sale/Sale";
import SellingTimer from "./SellingTimer/SellingTimer";

export default function Auction() {
  return (
    <div className="auction">
      <Sale sumText="Min.sum" />
      <SellingTimer />
    </div>
  );
}
