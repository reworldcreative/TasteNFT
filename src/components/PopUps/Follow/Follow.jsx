import AvatarLabel from "../../AvatarLabel/AvatarLabel";
import Button from "../../Button/Button";
import CheckboxSelectors from "../../CheckboxSelectors/CheckboxSelectors";
import "./follow.scss";

export default function Follow({ data }) {
  const [followStates, setFollowStates] = useState(data.map(() => false));

  const handleFollow = (index) => {
    const newFollowStates = [...followStates];
    newFollowStates[index] = !newFollowStates[index];
    setFollowStates(newFollowStates);
  };

  return (
    <>
      <div className="followPopUp">
        <CheckboxSelectors titles={["Following", "Followers"]} />

        <div className="follow-list">
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
              <Button
                onButtonClick={() => handleFollow(index)}
                addedClass={followStates[index] ? "followed" : ""}
              >
                {!followStates[index] ? "Follow" : "Unfollow"}
              </Button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
