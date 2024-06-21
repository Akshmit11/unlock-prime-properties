import Collection from "@/components/shared/Collection"
import ShareProperty from "@/components/shared/ShareProperty"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Building, Heart, MapPin, Phone } from "lucide-react"

const AgentId = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="flex gap-4 items-center mt-4 md:mt-0 flex-col md:flex-row">
        <h1 className="text-2xl font-medium">Agent Name</h1>
      </div>
      <Separator className="mt-4 md:mt-8" />
      {/* Features, Location */}
      <div className="flex justify-between mt-4 items-center flex-col md:flex-row">
        <div className="flex w-full md:w-2/3 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h1 className="text-sm font-semibold text-gray-400 mb-2">
              Specializes In
            </h1>
            <div className="flex gap-2 items-center text-xs font-light">
              <Building className="w-4 h-4 text-gray-300" />
              <span className="font-bold"> Flat</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-sm font-semibold text-gray-400 mb-2">
              Office Address
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
        <div className="w-full md:w-1/3 flex gap-2 mt-4 md:mt-0 flex-wrap md:flex-nowrap">
          <Button className="gap-2" variant={"outline"} size={"sm"}>
            <Heart className="w-4 h-4 opacity-70" /> Save
          </Button>
          <ShareProperty />
          <Button className="gap-2" variant={"default"} size={"sm"}>
            <Phone className="w-4 h-4 opacity-70" /> Get Agent Number
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-8">
        <h1 className="text-lg mb-2">Agent Profile Photo</h1>
        <div className="w-40 h-40 border rounded-md flex items-center justify-center">
          <h1 className="text-xs">Agent Profile Photo</h1>
        </div>  
      </div>

      <div className="w-full mt-8">
        <h1 className="text-lg mb-2">Agent Introduction</h1>
        <p className="text-left text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          quisquam? Fuga cum, unde eum tempore cupiditate voluptas labore facere
          sed nam, iusto incidunt consectetur aspernatur porro obcaecati,
          aperiam atque et.
        </p>
      </div>

      <h1 className="text-lg mt-8">Properties Uploaded</h1>
      <Collection 
        data={["1", "2", "3", "4", "5"]}
        emptyTitle="No Properties Found"
        emptySubtitle="Come back later..."
        page={1}
        limit={8}
        collectionType="Agent_Properties"
      />
    </div>
  )
}

export default AgentId