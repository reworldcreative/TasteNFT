import AvatarLabel from "../../AvatarLabel/AvatarLabel";
import Button from "../../Button/Button";
import CheckboxSelectors from "../../CheckboxSelectors/CheckboxSelectors";
import "./follow.scss";

export default function Follow({ data }) {
  return (
    <>
      <div>
        <CheckboxSelectors titles={["Following", "Followers"]} />

        <ul className="follow-list">
          {data.map((item, index) => (
            <li key={index} className="follow-list__item">
              <AvatarLabel
                className="avatarMainLabel"
                userName={item.userName}
                userLink={item.userLink}
                avatarWidth="49"
                avatarHeight="49"
                avatarImage={item.avatarImage}
              />
              <Button>Follow</Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
