import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative p-2 border rounded-md w-full flex items-center flex-col gap-2 md:flex-row">
      <Image
        src={"/assets/hero-img.webp"}
        alt="hero image"
        width={600}
        height={600}
        className="object-contain object-center bg-black"
      />
      <div className="flex flex-col items-center justify-center h-full gap-2 sm:gap-4">
        <h1 className="text-2xl font-bold text-center md:text-3xl">
          Unlock Your Dream Property
        </h1>
        <p className="text-sm opacity-80 text-center md:w-3/4">
          Discover seamless real estate transactions at Unlock Prime Properties,
          where buyers find their dream properties effortlessly.
        </p>
      </div>
      {/* TODO: Search Functionality */}
    </div>
  );
};

export default HeroSection;
