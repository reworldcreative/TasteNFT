import React from "react";
import "./search.scss";
import Header from "@/components/Header/Header";
import NftList from "@/components/NftList/NftList";
import Selector from "@/components/Selector/Selector";
import nftList from "@/data/nftList.data.json";
import Button from "@/components/Button/Button";
import CreatorCard from "@/components/CreatorCard/CreatorCard";

import avatarMain from "@/img/avatars/avatar_1.jpg";
import avatar9 from "@/img/avatars/avatar_9.jpg";
import avatar10 from "@/img/avatars/avatar_10.jpg";
import avatar11 from "@/img/avatars/avatar_11.jpg";
import avatar12 from "@/img/avatars/avatar_12.jpg";

export default function Search() {
  const [selectedTypeValue, setSelectedTypeValue] = useState("Auctions");
  const [selectedDataValue, setSelectedDataValue] = useState("Recently added");
  const [showAll, setShowAll] = useState(false);

  const swapShowAll = () => {
    setShowAll(!showAll);
  };

  const filteredNftList = useMemo(() => {
    if (showAll) {
      return nftList.filter(
        (nftItem) =>
          nftItem.type === selectedTypeValue &&
          nftItem.data === selectedDataValue
      );
    } else {
      return nftList
        .filter(
          (nftItem) =>
            nftItem.type === selectedTypeValue &&
            nftItem.data === selectedDataValue
        )
        .slice(0, 4);
    }
  }, [nftList, selectedTypeValue, selectedDataValue, showAll]);
  return (
    <>
      <Header>
        <Button
          onButtonClick={() => {
            // window.location.href = "/#/user-profile";
            window.location.href =
              window.location.origin +
              window.location.pathname +
              "#/user-profile";
          }}
        >
          Connect wallet
        </Button>
      </Header>

      <section
        className="nft-list-section nft-list-section-search"
        aria-labelledby="nft-list-section__title"
      >
        <div className="nft-list-section__wrapper">
          <h2 className="visibility-hidden" id="nft-list-section__title">
            nft list section
          </h2>
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

          <NftList filteredNftList={filteredNftList} />

          <button
            className="nft-list-section-search__button"
            onClick={swapShowAll}
          >
            <span className="section-text">
              {showAll ? "Show less" : "Show all"}
            </span>
          </button>
        </div>
      </section>

      <section
        className="FeaturedCreators-section FeaturedCreators-section-search"
        aria-labelledby="FeaturedCreators-section__title"
      >
        <div className="FeaturedCreators-section__wrapper">
          <h2
            className="section-title visibility-hidden"
            id="FeaturedCreators-section__title"
          >
            Featured creators
          </h2>

          <div className="FeaturedCreators-section__list">
            <CreatorCard
              image={avatarMain}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar10}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar11}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar12}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar10}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatarMain}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar11}
              width="80"
              height="80"
              name="User Name"
              link="@username"
              sales="24"
              eth="32"
            />

            <CreatorCard
              image={avatar9}
              width="80"
              height="80"
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
