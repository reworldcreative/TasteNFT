import SocialsItem from "./SocialsItem";
import "./socials.scss";

import twitchIcon from "@/img/icons/twitch-icon.svg";
import instagramIcon from "@/img/icons/instagram-icon.svg";
import twitterIcon from "@/img/icons/twitter-icon.svg";
import onlyfansIcon from "@/img/icons/onlyfans-icon.svg";

export default function SocialsList() {
  return (
    <div className="socialsList">
      <SocialsItem
        link="https://www.twitch.tv"
        image={twitchIcon}
        caption="Twitch"
      />
      <SocialsItem
        link="https://www.instagram.com"
        image={instagramIcon}
        caption="Instagram"
      />
      <SocialsItem
        link="https://twitter.com"
        image={twitterIcon}
        caption="Twitter"
      />
      <SocialsItem
        link="https://onlyfans.com"
        image={onlyfansIcon}
        caption="Onlyfans"
      />
    </div>
  );
}
