import React, { useEffect, useState } from "react";
import "./mainPage.scss";
import Header from "@/components/Header/Header";
import AvatarLabel from "@/components/AvatarLabel/AvatarLabel";
import BidComponent from "@/components/Bid/Bid";
import Button from "@/components/Button/Button";
import LinksList from "@/components/LinksList/LinksList";
import MainSlider from "@/components/MainSlider/MainSlider";
import Selector from "@/components/Selector/Selector";
import NftCard from "@/components/NftCard/NftCard";
import CreatorCard from "@/components/CreatorCard/CreatorCard";

import nftList from "@/data/nftList.data.json";

import bidImage from "@/img/tasteNFT_logo_2.jpg";
import bidImage2 from "@/img/tasteNFT_logo_1.jpg";

import avatarMain from "@/img/avatars/avatar_1.jpg";
import avatar2 from "@/img/avatars/avatar_2.jpg";
import avatar3 from "@/img/avatars/avatar_3.jpg";
import avatar4 from "@/img/avatars/avatar_4.jpg";
import avatar5 from "@/img/avatars/avatar_5.jpg";
import avatar6 from "@/img/avatars/avatar_6.jpg";
import avatar7 from "@/img/avatars/avatar_7.jpg";
import avatar8 from "@/img/avatars/avatar_8.jpg";
import avatar9 from "@/img/avatars/avatar_9.jpg";
import avatar10 from "@/img/avatars/avatar_10.jpg";
import avatar11 from "@/img/avatars/avatar_11.jpg";
import avatar12 from "@/img/avatars/avatar_12.jpg";

import nftimage1 from "@/img/nft/nft_1.jpg";
import nftimage3 from "@/img/nft/nft_3.jpg";
import nftimage5 from "@/img/nft/nft_5.jpg";
import nftimage6 from "@/img/nft/nft_6.jpg";
import nftimage7 from "@/img/nft/nft_7.jpg";
import nftimage8 from "@/img/nft/nft_8.jpg";
import nftimage9 from "@/img/nft/nft_9.jpg";
import nftimage10 from "@/img/nft/nft_10.jpg";

export default function MainPage() {
  const [selectedTypeValue, setSelectedTypeValue] = useState("Auctions");
  const [selectedDataValue, setSelectedDataValue] = useState("Recently added");
  const [filteredNftList, setFilteredNftList] = useState([]);

  useEffect(() => {
    setFilteredNftList(
      nftList.filter(
        (nftItem) =>
          nftItem.type === selectedTypeValue &&
          nftItem.data === selectedDataValue
      )
    );
  }, [selectedTypeValue, selectedDataValue]);

  return (
    <>
      <Header />
      <section className="main-section">
        <div className="main-section__wrapper">
          <div className="main-section__content">
            <AvatarLabel
              className="avatarMainLabel"
              userName="User Name"
              userLink="@username"
              avatarWidth="49px"
              avatarHeight="49px"
              avatarImage={avatarMain}
            />

            <h1 className="section-title">WFH - art name</h1>
            <p className="section-text">
              <span className="section-text_accent">Description:</span> The
              iconic meme that became a viral Internet sensation and an
              indispensable part of the gachimuchi music genre. This was taken
              when I was very young and in my full "performance" attire. That
              part of me now "lives" on platforms like Twitch, YouTube, and
              Bilibili (B 站).
            </p>

            <div className="main-section__bottom">
              <div className="main-section__sold">
                <p className="section-text_accent">Sold for:</p>
                <BidComponent image={bidImage} counter="1,5M" />
              </div>
              <div className="main-section__menu">
                <Button>View</Button>
                <LinksList />
              </div>
            </div>
          </div>
          <MainSlider />
        </div>
      </section>

      <section className="nft-list-section">
        <div className="nft-list-section__wrapper">
          <div className="selectors">
            <Selector
              id={"sell-data-selector"}
              options={[
                "Recently added",
                "This week",
                "This month",
                "this year",
                "All time",
                "Today",
                "Tomorrow",
              ]}
              onSelect={setSelectedDataValue}
            />
            <Selector
              id={"sell-type-selector"}
              options={["Auctions", "Sell", "Trade"]}
              onSelect={setSelectedTypeValue}
            />
          </div>

          <div className="nft-List">
            {filteredNftList.length ? (
              filteredNftList.map((nftItem) => (
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
            {/* <NftCard
              title="WFH - art name"
              image={nftimage1}
              width="317px"
              height="317px"
              avatar={avatarMain}
              bidImage={bidImage2}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage5}
              width="317px"
              height="317px"
              avatar={avatar2}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage6}
              width="317px"
              height="317px"
              avatar={avatar3}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage3}
              width="317px"
              height="317px"
              avatar={avatar4}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage7}
              width="317px"
              height="317px"
              avatar={avatar5}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage8}
              width="317px"
              height="317px"
              avatar={avatar6}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage9}
              width="317px"
              height="317px"
              avatar={avatar7}
              bidImage={bidImage}
            />
            <NftCard
              title="WFH - art name"
              image={nftimage10}
              width="317px"
              height="317px"
              avatar={avatar8}
              bidImage={bidImage}
            /> */}
          </div>
        </div>
      </section>

      <section className="FeaturedCreators-section">
        <div className="FeaturedCreators-section__wrapper">
          <h2 className="section-title">Featured creators</h2>

          <div className="FeaturedCreators-section__list">
            <CreatorCard
              image={avatarMain}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar10}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar11}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar12}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar10}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatarMain}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar11}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80px"
              height="80px"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />
          </div>
        </div>
      </section>
    </>
  );
}
