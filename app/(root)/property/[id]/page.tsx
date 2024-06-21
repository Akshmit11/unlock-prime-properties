import PropertyImageCarousel from "@/components/shared/PropertyImageCarousel";
import ShareProperty from "@/components/shared/ShareProperty";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, LandPlot, MapPin, Phone, Plus, Share } from "lucide-react";

const PropertyPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="flex gap-4 items-center mt-4 md:mt-0 flex-col md:flex-row">
        <h1 className="md:border-r-2 pr-4">
          Rs. <span className="text-3xl font-bold">20,00,000</span>
        </h1>
        <h1 className="text-2xl font-medium">Property Title</h1>
      </div>
      <Separator className="mt-4 md:mt-8" />
      {/* Features, Location */}
      <div className="flex justify-between mt-4 items-center flex-col md:flex-row">
        <div className="flex w-full md:w-2/3 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h1 className="text-sm font-semibold text-gray-400 mb-2">
              Basic Info
            </h1>
            <div className="flex gap-2 items-center text-xs font-light">
              <LandPlot className="w-4 h-4 text-gray-300" /> Area:{" "}
              <span className="font-bold"> 2000 sq.ft</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-sm font-semibold text-gray-400 mb-2">
              Location
            </h1>
            <div className="flex gap-2 items-center text-xs font-light">
              <MapPin className="w-4 h-4 text-gray-300" />
              <span className="font-bold">
                {" "}
                A-70 Amra Vihar Lalita Nagar, Bhopal
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex space-x-2 mt-4 md:mt-0">
          <Button className="gap-2" variant={"outline"} size={"sm"}>
            <Heart className="w-4 h-4 opacity-70" /> Save
          </Button>
          <ShareProperty />
          <Button className="gap-2" variant={"default"} size={"sm"}>
            <Phone className="w-4 h-4 opacity-70" /> Get Owner Number
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-8">
        <h1 className="text-lg mb-2">Property Photos</h1>
        <PropertyImageCarousel data={["1", "2", "3"]} />
      </div>

      <div className="w-full mt-8">
        <h1 className="text-lg mb-2">Property Description</h1>
        <p className="text-left text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          quisquam? Fuga cum, unde eum tempore cupiditate voluptas labore facere
          sed nam, iusto incidunt consectetur aspernatur porro obcaecati,
          aperiam atque et.
        </p>
      </div>

      <h1 className="text-lg mt-8">Overview</h1>
      <div className="flex flex-row gap-8 flex-wrap my-2 md:justify-evenly">
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">Property Type</h1>
          <p className="text-left md:text-center font-medium text-sm">
            Plot/Land
          </p>
        </div>
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">Property Category</h1>
          <p className="text-left md:text-center font-medium text-sm">
            Residential
          </p>
        </div>
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">Country</h1>
          <p className="text-left md:text-center font-medium text-sm">India</p>
        </div>
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">State</h1>
          <p className="text-left md:text-center font-medium text-sm">
            Madhya Pradesh
          </p>
        </div>
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">City</h1>
          <p className="text-left md:text-center font-medium text-sm">Bhopal</p>
        </div>
        <div className="md:text-center">
          <h1 className="text-md mb-2 font-light">Date Uploaded</h1>
          <p className="text-left md:text-center font-medium text-sm">
            20th June, 2024
          </p>
        </div>
      </div>

      <div className="w-full my-8">
        <h1 className="text-lg mb-2">Amenites and Features</h1>
        <div className="text-left text-sm">
          <ul className="list-disc flex flex-row gap-1 flex-wrap">
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((feature, i) => (
              <li key={i} className="mx-4">Feature {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
