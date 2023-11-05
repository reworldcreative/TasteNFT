import "./socials.scss";

export default function SocialsItem({ link, image, caption }) {
  return (
    <a
      href={link}
      className="socialsItem"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt="social image" width="20" height="20" />
      <p className="socialsItem__text">{caption}</p>
    </a>
  );
}
