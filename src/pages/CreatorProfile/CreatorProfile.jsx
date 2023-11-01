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
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: "./img/avatars/avatar_1.jpg",
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar13,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar14,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar15,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar16,
    },

    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar13,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
      avatarImage: avatar14,
    },
    {
      className: "avatarMainLabel",
      userName: "User Name",
      userLink: "@username",
      avatarWidth: "49",
      avatarHeight: "49",
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

      <Header>
        <Button
          onButtonClick={() => {
            window.location.href = "/#/user-profile";
          }}
        >
          Connect wallet
        </Button>
      </Header>

      <section className="creatorInfo" aria-labelledby="creatorInfo__title">
        <div className="creatorInfo__wrapper">
          <h2 className="visibility-hidden" id="creatorInfo__title">
            creator Info
          </h2>
          <div className="creatorInfo__column">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49"
              avatarHeight="49"
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

      <section className="creatorWorks" aria-labelledby="creatorWorks__title">
        <div className="creatorWorks__wrapper">
          <h2 className="visibility-hidden" id="creatorWorks__title">
            creator Works
          </h2>
          <CheckboxSelectors titles={["Created", "Collected"]} />
          <NftList filteredNftList={nftList.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}
