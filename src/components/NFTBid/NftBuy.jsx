import Button from "../Button/Button";
import NftBidPrice from "./NftBidPrice";
import "./nftBid.scss";
import bidImage from "@/img/tasteNFT_logo_2.jpg";

export default function NftBuy() {
  return (
    <div className="nftBid">
      <div className="nftBid__item">
        <p className="section-text_accent">Price:</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <NftBidPrice bidImage={bidImage} counter="1,5M" price="1308.54$" />
        </div>
      </div>
      <div className="nftDivider" />
      <div className="nftBid__item">
        <Button>Buy art</Button>
      </div>
    </div>
  );
}
