import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative p-2 border rounded-md w-full flex items-center flex-col gap-2 lg:flex-row">
      <Image
        src={"/assets/hero-img.webp"}
        alt="hero image"
        width={600}
        height={600}
        className="w-full object-contain object-center bg-black rounded-t-md lg:rounded-l-md lg:rounded-tr-none"
      />
      <div className="flex flex-col items-center justify-center h-full gap-2 sm:gap-4">
        <h1 className="text-2xl font-bold text-center md:text-3xl">
          Unlock Your Dream Property
        </h1>
        <p className="text-sm opacity-80 text-center md:w-3/4">
          Discover seamless real estate transactions at Unlock Prime Properties,
          where buyers find their dream properties effortlessly.
        </p>
        {/* TODO: Search Functionality */}
        <Link href={'/all-properties'} className="flex w-full m-1 p-2 rounded-md items-center gap-2 md:w-5/6 bg-gray-200">
          <Search className="w-5 h-5" />
          <h1 className="text-md font-light">Search any Property</h1>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
