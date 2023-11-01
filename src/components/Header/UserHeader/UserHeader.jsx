import React, { useState } from "react";
import "./userHeader.scss";

import avatarMain from "@/img/avatars/avatar_1.jpg";
import bidImage from "@/img/tasteNFT_logo_2.jpg";
import dropdownIcon from "@/img/icons/downArrow-icon.svg";
import AvatarLabel from "../../AvatarLabel/AvatarLabel";
import Button from "../../Button/Button";
import BidComponent from "../../Bid/Bid";
import UserHeaderDropdown from "./UserHeaderDropdown/UserHeaderDropdown";

export default function UserHeader({ onCreateWorkOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="userHeader">
      <Button onButtonClick={onCreateWorkOpen}>+ Add artwork</Button>
      <div className="userHeader__menu">
        {isOpen && (
          <UserHeaderDropdown userAddress="0c0xcx1cx606g4516x51g12323324324332" />
        )}
        <div className="userHeader__content">
          <AvatarLabel
            className="avatarMainLabel"
            userName="User Name"
            userLink="@username"
            avatarWidth="49"
            avatarHeight="49"
            avatarImage={avatarMain}
          />

          <div className="userHeader__bid">
            <p className="section-text_accent">Balance:</p>
            <BidComponent image={bidImage} counter="1,5M" />
          </div>
        </div>

        <button className="userHeader__dropdown" onClick={toggleDropdown}>
          <img src={dropdownIcon} alt="dropdown arrow" />
        </button>
      </div>
    </div>
  );
}
