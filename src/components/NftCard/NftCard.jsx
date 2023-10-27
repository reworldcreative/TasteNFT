import PictureComponent from "@/../plugins/PictureComponent";
import "./nftCard.scss";

import AvatarLabel from "../AvatarLabel/AvatarLabel";
import BidComponent from "../Bid/Bid";
import { Link } from "react-router-dom";

export default function nftCard({
  title,
  image,
  width,
  height,
  avatar,
  bidImage,
}) {
  return (
    <article className="nftCard">
      <AvatarLabel
        className="avatarLabel"
        userName="User Name"
        userLink="@username"
        avatarWidth="26px"
        avatarHeight="26px"
        avatarImage={avatar}
      />
      <Link to={"/artwork"}>
        <PictureComponent
          src={image}
          alt="nft image"
          className="nftCard__image"
          width={width}
          height={height}
        />
        <div className="nftCard__content">
          <h2 className="nftCard__title">{title}</h2>
          <div className="nftCard__statistic">
            <div className="nftCard__statistic-item">
              <p className="section-text_accent">Sold for:</p>
              <BidComponent image={bidImage} counter="1,5M" />
            </div>

            <div className="nftCard__statistic-item">
              <p className="section-text_accent">Ending in:</p>
              <div className="section-text nftCard__timer">05h 02m 41s</div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
