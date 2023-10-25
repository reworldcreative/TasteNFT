import React from "react";
import "./artworkPage.scss";
import Header from "@/components/Header/Header";

import PictureComponent from "@/../plugins/PictureComponent";
import bannerImage from "@/img/banner.jpg";
import NftBid from "@/components/NFTBid/NftBid";

import AvatarLabel from "@/components/AvatarLabel/AvatarLabel";
import LinksList from "@/components/LinksList/LinksList";
import ActivityItem from "@/components/ActivityItem/ActivityItem";
import NftCard from "@/components/NftCard/NftCard";

import nftList from "@/data/nftList.data.json";

import bidImage from "@/img/tasteNFT_logo_2.jpg";

import avatarMain from "@/img/avatars/avatar_1.jpg";
import avatar8 from "@/img/avatars/avatar_8.jpg";

export default function ArtworkPage() {
  const filteredNftList = [...nftList];
  return (
    <>
      <Header />
      <section className="banner">
        <div className="banner__wrapper">
          <PictureComponent
            src={bannerImage}
            alt="banner"
            className="banner__image"
          />

          <NftBid />
        </div>
      </section>

      <section className="user-info-section">
        <div className="user-info-section__wrapper">
          <div className="user-info-section__column">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49px"
              avatarHeight="49px"
              avatarImage={avatarMain}
            />

            <div className="user-info-section__text">
              <h1 className="section-title">WFH - art name</h1>
              <p className="section-text">
                <span className="section-text_accent">Сopy:</span> 2 of 10
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

      <section className="feature-works-section">
        <div className="feature-works-section__wrapper">
          <h2 className="section-title">Feature works</h2>

          <div className="nft-List">
            {filteredNftList.length ? (
              filteredNftList
                .slice(0, 8)
                .map((nftItem) => (
                  <NftCard
                    key={nftItem.id}
                    title={nftItem.title}
                    image={nftItem.image}
                    width="317px"
                    height="317px"
                    avatar={nftItem.avatar}
                    bidImage={nftItem.bidImage}
                  />
                ))
            ) : (
              <p className="empty-message">Empty list</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
