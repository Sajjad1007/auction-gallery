import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div
      className="hero flex-1"
      style={{
        backgroundImage: `url(${banner})`,
        objectFit: "cover",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
        <div className="text-white">
          <h1 className="max-w-xl mb-4 text-4xl font-semibold font-sora">
            Bid On Unique Items From Around The World
          </h1>
          <p className="max-w-md mb-4 font-sora font-extralight text-base opacity-80">
            Discover rare collectibles, luxury goods and vintage treasures in
            our curated auctions.
          </p>
          <button className="btn rounded-3xl shadow-none font-sora text-[#010000] font-medium text-sm px-4 h-10">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
