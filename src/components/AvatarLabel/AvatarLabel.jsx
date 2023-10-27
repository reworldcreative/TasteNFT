import PictureComponent from "@/../plugins/PictureComponent";
import "./avatarLabel.scss";
import { Link } from "react-router-dom";

export default function AvatarLabel({
  className,
  userName,
  userLink,
  avatarWidth,
  avatarHeight,
  avatarImage,
}) {
  return (
    <Link to={"/creator-profile"} className={className}>
      <PictureComponent
        src={avatarImage}
        alt="men avatar"
        className="avatar"
        width={avatarWidth}
        height={avatarHeight}
      />

      <div>
        <p className="userName">{userName}</p>
        <p className="userLink">{userLink}</p>
      </div>
    </Link>
  );
}
