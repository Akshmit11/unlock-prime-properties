import { LandPlot, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropertyCardProps = {
  property: string;
  collectionType: string;
  currentUserId?: string;
};

const PropertyCard = ({
  property,
  collectionType,
  currentUserId,
}: PropertyCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg transition-all hover:shadow-xl hover:-m-2 h-80 flex flex-col">
      <Link href={`/properties/${property}`} className="h-full rounded-lg">
        <div className="p-1 relative bg-[url('/assets/hero-img.webp')] bg-cover bg-center h-48 rounded-t-lg">
          <span className="mx-2 py-1 px-3 rounded-full text-xs text-white bg-primary">
            Featured
          </span>
          <span className="py-1 px-3 rounded-full text-xs text-white bg-gray-400 ">
            For Sale
          </span>
          <p className="absolute flex items-center gap-2 bottom-2 left-4 line-clamp-1 text-white">
            <MapPin className="w-4 h-4" /> A-70 Amra Vihar Lalita Nagar
          </p>
        </div>
        <div className="p-3 px-5">
          <h1 className="font-bold">Here will the Property Title</h1>
          <p className="mt-1 flex gap-1 items-center text-gray-500">
            <LandPlot className="w-3 h-3" />
            <span className="text-xs">Size: 2000 sq.ft.</span>
          </p>
        </div>
        <hr />
        <div className="flex justify-between p-2 px-4 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full border">
              <Image
                src={"/assets/hero-img.webp"}
                alt="user-avatar"
                width={30}
                height={30}
                className="w-full h-full object-cover rounded-full "
              />
            </div>
            <h1 className="text-sm font-medium">User Name</h1>
          </div>
          <h1 className="font-bold">Rs. 20,00,000</h1>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
