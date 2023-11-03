import React from "react";
import "./userHeaderDropdown.scss";
import PopUpWrapper from "../../../PopUps/PopUpWrapper";
import ProfileEditor from "../../../PopUps/ProfileEditor/ProfileEditor";
import Balance from "../../../PopUps/Balance/Balance";
import Wallet from "../../../PopUps/Wallet/Wallet";
import Success from "../../../PopUps/Wallet/Success/Success";

export default function UserHeaderDropdown({ userAddress }) {
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isWalletSuccess, setIWalletSuccess] = useState(false);
  const PopUpEditorOpenButtonClick = () => {
    setIsProfileEditorOpen(!isProfileEditorOpen);
  };

  const PopUpBalanceOpenButtonClick = () => {
    setIsBalanceOpen(!isBalanceOpen);
  };

  const PopUpWalletOpenButtonClick = () => {
    setIsWalletOpen(!isWalletOpen);
  };

  const PopUpWalletSuccess = () => {
    setIsWalletOpen(false);
    setIWalletSuccess(!isWalletSuccess);
  };

  return (
    <div className="userHeaderDropdown">
      <PopUpWrapper
        isOpenPopUp={isProfileEditorOpen}
        toggleModal={PopUpEditorOpenButtonClick}
      >
        <ProfileEditor finish={PopUpEditorOpenButtonClick} />
      </PopUpWrapper>

      <PopUpWrapper
        isOpenPopUp={isBalanceOpen}
        toggleModal={PopUpBalanceOpenButtonClick}
      >
        <Balance finish={PopUpBalanceOpenButtonClick} />
      </PopUpWrapper>

      <PopUpWrapper
        isOpenPopUp={isWalletOpen}
        toggleModal={PopUpWalletOpenButtonClick}
      >
        <Wallet success={PopUpWalletSuccess} />
      </PopUpWrapper>

      <PopUpWrapper
        isOpenPopUp={isWalletSuccess}
        toggleModal={PopUpWalletSuccess}
      >
        <Success />
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
            <button
              className="section-text userHeaderDropdown__navigation-Link"
              onClick={PopUpBalanceOpenButtonClick}
            >
              Balance settings
            </button>
          </li>
          <li>
            <button
              className="section-text userHeaderDropdown__navigation-Link logOut"
              onClick={PopUpWalletOpenButtonClick}
            >
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
