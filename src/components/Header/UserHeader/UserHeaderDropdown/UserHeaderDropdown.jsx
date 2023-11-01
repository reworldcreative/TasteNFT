import React from "react";
import "./userHeaderDropdown.scss";
import PopUpWrapper from "../../../PopUps/PopUpWrapper";
import ProfileEditor from "../../../PopUps/ProfileEditor/ProfileEditor";

export default function UserHeaderDropdown({ userAddress }) {
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);
  const PopUpEditorOpenButtonClick = () => {
    setIsProfileEditorOpen(!isProfileEditorOpen);
  };
  return (
    <div className="userHeaderDropdown">
      <PopUpWrapper
        isOpenPopUp={isProfileEditorOpen}
        toggleModal={PopUpEditorOpenButtonClick}
      >
        <ProfileEditor />
      </PopUpWrapper>
      <p className="section-text_accent userHeaderDropdown__address">
        Address: {userAddress}
      </p>

      <nav className="userHeaderDropdown__navigation">
        <ul className="userHeaderDropdown__navigation-List">
          <li className="userHeaderDropdown__navigation-Item">
            <button
              className="section-text userHeaderDropdown__navigation-Link"
              onClick={PopUpEditorOpenButtonClick}
            >
              My profile
            </button>
          </li>
          <li>
            <button className="section-text userHeaderDropdown__navigation-Link">
              Balance settings
            </button>
          </li>
          <li>
            <button className="section-text userHeaderDropdown__navigation-Link logOut">
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
