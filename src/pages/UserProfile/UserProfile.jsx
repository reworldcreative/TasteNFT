import "./userProfile.scss";

import Header from "@/components/Header/Header";
import AvatarLabel from "@/components/AvatarLabel/AvatarLabel";
import FollowStat from "@/components/FollowStat/FollowStat";
import Button from "@/components/Button/Button";
import LinksList from "@/components/LinksList/LinksList";

import mainAvatar from "@/img/avatars/avatar_1.jpg";
import SocialsList from "@/components/SocialsList/SocialsList";
import nftList from "@/data/nftList.data.json";
import NftList from "@/components/NftList/NftList";
import CheckboxSelectors from "@/components/CheckboxSelectors/CheckboxSelectors";
import { useState } from "react";
import Follow from "@/components/PopUps/Follow/Follow";
import PopUpWrapper from "@/components/PopUps/PopUpWrapper";
import UserHeader from "@/components/Header/UserHeader/UserHeader";
import TimeChange from "@/components/PopUps/TimeChange/TimeChange";
import CreateWork from "@/components/PopUps/CreateWork/CreateWork";

export default function UserProfile() {
  const [isTimeOpenPopUp, setIsTimeOpenPopUp] = useState(false);
  const [isOpenCreateWorkPopUp, setIsOpenCreateWorkPopUp] = useState(false);
  const PopUpTimeOpenButtonClick = () => {
    setIsTimeOpenPopUp(!isTimeOpenPopUp);
  };
  const CreateWorkPopUpOpenButtonClick = () => {
    setIsOpenCreateWorkPopUp(!isOpenCreateWorkPopUp);
  };

  return (
    <>
      <PopUpWrapper
        isOpenPopUp={isTimeOpenPopUp}
        toggleModal={PopUpTimeOpenButtonClick}
      >
        <TimeChange finish={PopUpTimeOpenButtonClick} />
      </PopUpWrapper>

      <PopUpWrapper
        isOpenPopUp={isOpenCreateWorkPopUp}
        toggleModal={CreateWorkPopUpOpenButtonClick}
      >
        <CreateWork finish={CreateWorkPopUpOpenButtonClick} />
      </PopUpWrapper>

      <Header>
        <UserHeader onCreateWorkOpen={CreateWorkPopUpOpenButtonClick} />
      </Header>

      <section className="creatorInfo userInfo">
        <h1 className="section-title creatorInfo__title visibility-hidden">
          User Name
        </h1>
        <div className="creatorInfo__wrapper">
          <div className="creatorInfo__column">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49"
              avatarHeight="49"
              avatarImage={mainAvatar}
            />

            <div className="creatorInfo__right userInfo__right">
              <div className="followInfo">
                <FollowStat id="Followers" number="234" text="Followers" />
                <FollowStat id="Following" number="15" text="Following" />
              </div>
              <LinksList />
            </div>
          </div>

          <SocialsList />

          <p className="section-text creatorInfo__text">
            <span className="section-text_accent">Description:</span> The iconic
            meme that became a viral Internet sensation and an indispensable
            part of the gachimuchi music genre. This was taken when I was very
            young and in my full "performance" attire. That part of me now
            "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and
            Bilibili (B 站). The iconic meme that became a viral Internet
            sensation and an indispensable part of the gachimuchi music genre.
            This was taken when I was very young and in my full "performance"
            attire. That part of me now "lives" on platforms like Twitch,
            YouTube, and Bilibili (B 站).
          </p>
        </div>
      </section>

      <section className="creatorWorks">
        <h2 className="section-title creatorWorks__title visibility-hidden">
          Works
        </h2>
        <div className="creatorWorks__wrapper">
          <CheckboxSelectors titles={["Created", "Collected", "Bids"]} />
          <NftList
            filteredNftList={nftList.slice(0, 8)}
            onTimeEditClick={PopUpTimeOpenButtonClick}
          />
        </div>
      </section>
    </>
  );
}
