import PictureComponent from "@/../plugins/PictureComponent";
import "./nftCard.scss";

import AvatarLabel from "../AvatarLabel/AvatarLabel";
import BidComponent from "../Bid/Bid";
import { Link, useLocation } from "react-router-dom";
import CardStat from "./CardStat/CardStat";
import EditList from "./EditList/EditList";

export default function nftCard({
  title,
  image,
  width,
  height,
  avatar,
  bidImage,
  id,
  onTimeEditClick,
  status,
}) {
  const location = useLocation();
  const showAvatarLabel = location.pathname !== "/user-profile";

  // const CardStatText = () => {
  //   const statuses = ["Approved", "On moderation", "Declined"];
  //   const randomIndex = Math.floor(Math.random() * statuses.length);
  //   return statuses[randomIndex];
  // };

  return (
    <article className="nftCard" id={id}>
      {showAvatarLabel ? (
        <AvatarLabel
          className="avatarLabel"
          userName="User Name"
          userLink="@username"
          avatarWidth="26"
          avatarHeight="26"
          avatarImage={avatar}
        />
      ) : (
        <>
          <CardStat text={status} />
          <EditList onTimeEditClick={onTimeEditClick} cardStat={status} />
        </>
      )}
      <Link to={`/artwork/${id}`}>
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
