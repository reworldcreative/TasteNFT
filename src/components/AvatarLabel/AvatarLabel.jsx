import PictureComponent from "@/../plugins/PictureComponent";
import "./avatarLabel.scss";

export default function AvatarLabel({
  className,
  userName,
  userLink,
  avatarWidth,
  avatarHeight,
  avatarImage,
}) {
  return (
    <div className={className}>
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
    </div>
  );
}
