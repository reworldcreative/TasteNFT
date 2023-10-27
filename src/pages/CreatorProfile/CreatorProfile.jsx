import Header from "@/components/Header/Header";
import "./creatorProfile.scss";
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

import avatar13 from "@/img/avatars/avatar_13.jpg";
import avatar14 from "@/img/avatars/avatar_14.jpg";
import avatar15 from "@/img/avatars/avatar_15.jpg";
import avatar16 from "@/img/avatars/avatar_16.jpg";

export default function CreatorProfile() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const PopUpOpenButtonClick = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  const FollowingData = [
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: "./img/avatars/avatar_1.jpg",
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar13,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar14,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar15,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar16,
    },

    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar13,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar14,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49px",
      avatarHeight: "49px",
      avatarImage: avatar15,
    },
  ];

  // const Followersdata = [
  //   {
  //     className: "avatarMainLabel",
  //     userName: "User Name",
  //     userLink: "@username",
  //         avatarWidth: "49px",
  //         avatarHeight: "49px",
  //     avatarImage: "@/img/avatars/avatar_1.jpg",
  //   },
  // ];

  return (
    <>
      <PopUpWrapper
        isOpenPopUp={isOpenPopUp}
        toggleModal={PopUpOpenButtonClick}
      >
        <Follow data={FollowingData} />
      </PopUpWrapper>

      <Header />

      <section className="creatorInfo">
        <div className="creatorInfo__wrapper">
          <div className="creatorInfo__column">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49px"
              avatarHeight="49px"
              avatarImage={mainAvatar}
            />

            <div className="creatorInfo__right">
              <div className="followInfo">
                <FollowStat id="Followers" number="234" text="Followers" />
                <FollowStat id="Following" number="15" text="Following" />
              </div>
              <Button onButtonClick={PopUpOpenButtonClick} className="button">
                Follow
              </Button>
              <LinksList />
            </div>
          </div>

          <SocialsList />

          <p className="section-text creatorInfo__text">
            <span className="section-text_accent">Description:</span> The iconic
            meme that became a viral Internet sensation and an indispensable
            part of the gachimuchi music genre. This was taken when I was very
            young and in my full "performance" attire. That part of me now
            "lives" on platforms like Twitch, YouTube, and Bilibili (B 站). The
            iconic meme that became a viral Internet sensation and an
            indispensable part of the gachimuchi music genre. This was taken
            when I was very young and in my full "performance" attire. That part
            of me now "lives" on platforms like Twitch, YouTube, and Bilibili (B
            站).
          </p>
        </div>
      </section>

      <section className="creatorWorks">
        <div className="creatorWorks__wrapper">
          <CheckboxSelectors titles={["Created", "Collected"]} />
          <NftList filteredNftList={nftList} />
        </div>
      </section>
    </>
  );
}
