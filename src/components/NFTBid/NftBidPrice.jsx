import BidComponent from "../Bid/Bid";

export default function NftBidPrice({ bidImage, counter, price }) {
  return (
    <div className="bid-component">
      <BidComponent image={bidImage} counter={counter} />
      <p className="section-text_accent price"> ({price})</p>
    </div>
  );
}
