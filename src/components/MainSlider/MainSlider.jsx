// import { useRef, useEffect } from "react";
// import { Swiper } from "swiper";
import PictureComponent from "@/../plugins/PictureComponent";
import "./mainSlider.scss";
// import { register } from "swiper/element/bundle";
// register();

import nft1 from "@/img/nft/nft_1.jpg";
import nft2 from "@/img/nft/nft_2.jpg";
import nft3 from "@/img/nft/nft_3.jpg";
import nft4 from "@/img/nft/nft_4.jpg";

export default function mainSlider() {
  return (
    <div className="main-slider">
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        grab-cursor="true"
        effect="cards"
        cards-effect-rotate="false"
        cards-effect-per-slide-rotate="0"
        cards-effect-per-slide-offset="18"
        cards-effect-slide-shadows="false"
      >
        <swiper-slide>
          <PictureComponent src={nft1} alt="nft image" className="nft-image" />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent src={nft2} alt="nft image" className="nft-image" />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent src={nft3} alt="nft image" className="nft-image" />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent src={nft4} alt="nft image" className="nft-image" />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
