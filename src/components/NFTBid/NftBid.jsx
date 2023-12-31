import Button from "../Button/Button";
import NftBidPrice from "./NftBidPrice";
import "./nftBid.scss";
import bidImage from "@/img/tasteNFT_logo_2.jpg";

export default function NftBid({ onButtonClick }) {
  return (
    <div className="nftBid">
      <div className="nftBid__item">
        <p className="section-text_accent">Current Bid:</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <NftBidPrice bidImage={bidImage} counter="1,5M" price="1308.54$" />
        </div>
      </div>
      <div className="nftDivider" />
      <div className="nftBid__item">
        <p className="section-text_accent">Auction ending in:</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <p className="section-text">
            {" "}
            1 <span className="section-text__time">h</span>
          </p>
          <p className="section-text">
            {" "}
            28 <span className="section-text__time">m</span>
          </p>
          <p className="section-text">
            {" "}
            32 <span className="section-text__time">s</span>
          </p>
        </div>
      </div>
      <div className="nftDivider" />
      <div className="nftBid__item">
        <Button onButtonClick={onButtonClick}>Place a bid</Button>
      </div>
    </div>
  );
}
