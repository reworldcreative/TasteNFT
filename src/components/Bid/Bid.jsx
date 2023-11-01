import "./bid.scss";
import PictureComponent from "@/../plugins/PictureComponent";

export default function BidComponent({ image, counter }) {
  return (
    <div className="bid-component">
      <PictureComponent
        src={image}
        alt="bid image"
        className="bid-component__image"
        width="19"
        height="19"
      />
      <p className="bid-component__counter">{counter}</p>
    </div>
  );
}
