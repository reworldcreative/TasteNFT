import PictureComponent from "@/../plugins/PictureComponent";
import "./activityItem.scss";

import Button from "../Button/Button";
import external from "@/img/icons/external-icon.svg";
import NftBidPrice from "../NFTBid/NftBidPrice";
export default function ActivityItem({
  avatar,
  bidImage,
  caption,
  data,
  counter,
  price,
}) {
  const itemCaption = caption.replace(
    /^(Bid placed by [A-Za-z0-9]{6}).*([A-Za-z0-9]{4})$/,
    "$1...$2"
  );
  return (
    <li className="activity__item">
      <div className="activity__left">
        <PictureComponent
          src={avatar}
          alt="avatar"
          className="avatar"
          width="32"
          height="32"
        />

        <div className="activity__text">
          <h3 className="section-text activity__caption">{itemCaption}</h3>
          <p className="section-text_accent activity__data">{data}</p>
        </div>
      </div>
      <div className="activity__right">
        <NftBidPrice bidImage={bidImage} counter={counter} price={price} />
        <Button>
          <img src={external} alt="eternal icon" width="20" height="20" />
        </Button>
      </div>
    </li>
  );
}
