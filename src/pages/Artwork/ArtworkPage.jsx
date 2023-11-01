import React, { useState, useEffect } from "react";
import "./artworkPage.scss";
import Header from "@/components/Header/Header";

import PictureComponent from "@/../plugins/PictureComponent";
import bannerImage from "@/img/banner.jpg";
import NftBid from "@/components/NFTBid/NftBid";
import NftBuy from "@/components/NFTBid/NftBuy";

import AvatarLabel from "@/components/AvatarLabel/AvatarLabel";
import LinksList from "@/components/LinksList/LinksList";
import ActivityItem from "@/components/ActivityItem/ActivityItem";
import NftCard from "@/components/NftCard/NftCard";

import nftList from "@/data/nftList.data.json";

import bidImage from "@/img/tasteNFT_logo_2.jpg";

import avatarMain from "@/img/avatars/avatar_1.jpg";
import avatar8 from "@/img/avatars/avatar_8.jpg";
import PopUpWrapper from "@/components/PopUps/PopUpWrapper";
import PlaceBid from "@/components/PopUps/PlaceBid/PlaceBid";
import NftList from "@/components/NftList/NftList";
import Button from "@/components/Button/Button";
import { useParams } from "react-router-dom";

export default function ArtworkPage() {
  const { id } = useParams();

  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const PopUpOpenButtonClick = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  const currentItem = nftList.find((item) => item.id === +id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <PopUpWrapper
        isOpenPopUp={isOpenPopUp}
        toggleModal={PopUpOpenButtonClick}
      >
        <PlaceBid onPlaceBid={PopUpOpenButtonClick} />
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
      <section className="banner" aria-labelledby="nft-work-banner">
        <div className="banner__wrapper">
          <h2 className="visibility-hidden" id="nft-work-banner">
            nft work banner
          </h2>
          <PictureComponent
            // src={bannerImage}
            src={currentItem.image}
            alt="banner"
            className="banner__image"
          />

          {
            currentItem.type === "Auctions" ? (
              <NftBid onButtonClick={PopUpOpenButtonClick} />
            ) : currentItem.type === "Sell" ? (
              <NftBuy />
            ) : (
              <></>
            )
            // currentItem.type === "..."? (...)
          }
          {/* <NftBid onButtonClick={PopUpOpenButtonClick} /> */}
          {/* <NftBuy /> */}
        </div>
      </section>

      <section className="user-info-section">
        <div className="user-info-section__wrapper">
          <div className="user-info-section__column">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49"
              avatarHeight="49"
              avatarImage={currentItem.avatar}
            />

            <div className="user-info-section__text">
              <h1 className="section-title">{currentItem.title}</h1>
              <p className="section-text">
                <span className="section-text_accent">Copy:</span> 2 of 10
              </p>
              <p className="section-text">
                <span className="section-text_accent">Description:</span> The
                iconic meme that became a viral Internet sensation and an
                indispensable part of the gachimuchi music genre. This was taken
                when I was very young and in my full "performance" attire. That
                part of me now "lives" on platforms like Twitch, YouTube, and
                Bilibili (B 站). The iconic meme that became a viral Internet
                sensation and an indispensable part of the gachimuchi music
                genre. This was taken when I was very young and in my full
                "performance" attire. That part of me now "lives" on platforms
                like Twitch, YouTube, and Bilibili (B 站).
              </p>
              <LinksList />
            </div>
          </div>

          <div className="activity">
            <h2 className="section-title">Activity</h2>

            <ul className="activity__list">
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
              <ActivityItem
                avatar={avatar8}
                bidImage={bidImage}
                caption="Bid placed by 0x6FC0...14A4"
                data=" May 19, 2021 at 2:27pm"
                counter="1,5M"
                price="1308.54$"
              />
            </ul>
          </div>
        </div>
      </section>

      <section
        className="feature-works-section"
        aria-labelledby="feature-works-section__title"
      >
        <div className="feature-works-section__wrapper">
          <h2 className="section-title" id="feature-works-section__title">
            Feature works
          </h2>

          <NftList filteredNftList={nftList.slice(0, 8)} />
        </div>
      </section>
    </>
  );
}
