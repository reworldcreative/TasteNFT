import LinksItem from "./LinkItem";
import "./links.scss";
import externalIcon from "@/img/icons/external-icon.svg";
import shareIcon from "@/img/icons/share-icon.svg";
import verticalDotsIcon from "@/img/icons/vertical-dots-icon.svg";

export default function LinksList() {
  return (
    <>
      <ul className="linksList">
        <LinksItem>
          <a href="#">
            <img
              src={externalIcon}
              alt="external link"
              className="links-icon"
              width="20"
              height="20"
            />
          </a>
        </LinksItem>
        <LinksItem>
          <a href="#">
            <img
              src={shareIcon}
              alt="share link"
              className="links-icon"
              width="20"
              height="20"
            />
          </a>
        </LinksItem>
        <LinksItem>
          <a href="#">
            <img
              src={verticalDotsIcon}
              alt="menu link"
              className="links-icon"
              width="20"
              height="20"
            />
          </a>
        </LinksItem>
      </ul>
    </>
  );
}
