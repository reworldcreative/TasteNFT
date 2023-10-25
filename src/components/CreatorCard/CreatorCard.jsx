import PictureComponent from "@/../plugins/PictureComponent";
import "./creatorCard.scss";

export default function CreatorCard({
  image,
  width,
  height,
  name,
  link,
  sales,
  eth,
}) {
  return (
    <article className="Creator-card">
      <PictureComponent
        src={image}
        alt="creator image"
        className="Creator-card__image"
        width={width}
        height={height}
      />
      <div className="Creator-card__content">
        <h2 className="Creator-card__name">{name}</h2>
        <p className="Creator-card__link">{link}</p>
        <p className="Creator-card__info section-text_accent">
          {sales} sales on {eth}ETH
        </p>
      </div>
    </article>
  );
}
