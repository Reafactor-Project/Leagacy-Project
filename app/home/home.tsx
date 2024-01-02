"use client";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import "./SlideShow.css";
import { Slide } from "react-slideshow-image";
import "../home/home.css"
import Countdown from "./countdown"
import FlashSales from "./FlashSales"
import Categories from "./Categories"
import BestTab from "./BestTab"
import BestSellers from "./BestSellers"
import Jbl from "./Jbl"
import Explore from "./Explore"
import AllProducts from "./AllProducts"
import Arrivals from "./Arrivals"
import Delivery from "./Delivery"

const Home: React.FC = () => {
  const images: string[] = [
    "https://images2.imgbox.com/60/fd/ItaLWild_o.png",
    "https://cdn.neowin.com/news/images/uploaded/2023/10/1697743744_xbox-power-your-dreams.jpg",
    "https://pbs.twimg.com/media/FqmfweYaAAAJwr_.jpg",
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    autoplay: true,
    indicators: true,
    arrows: false,
    easing: "ease-out",
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="slide-container">
        <Slide {...properties}>
          {images.map((image, index) => (
            <div key={index} className="each-slide-effect">
              <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="catandimg">
        <div className="Allcategory">
          <div className="text-wrapper-2">Woman's Fashion &gt;</div>
          <div className="text-wrapper-2">Men's Fashion &gt;</div>
          <div className="text-wrapper-2">Electronics-</div>
          <div className="text-wrapper-2">Home &amp; Lifestyle</div>
          <div className="text-wrapper-2">Medicine</div>
          <div className="text-wrapper-2">Sports &amp; Outdoor</div>
          <div className="text-wrapper-2">Baby’s &amp; Toys</div>
          <div className="text-wrapper-2">Groceries &amp; Pets</div>
          <div className="text-wrapper-2">Health &amp; Beauty</div>
        </div>
        <Countdown/>
        <FlashSales/>
        <Categories />
        <BestTab />
        <BestSellers />
        <Jbl />
        <Explore />
        <AllProducts />
        <Arrivals />
        <Delivery />

      </div>
    </div>
  );
};

export default Home;
