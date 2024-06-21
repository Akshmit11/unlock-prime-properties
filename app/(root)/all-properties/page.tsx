import Collection from "@/components/shared/Collection"
import PropertyFilter from "@/components/shared/PropertyFilter"
import PropertyFilterMobile from "@/components/shared/PropertyFilterMobile"
import SearchComponent from "@/components/shared/SearchComponent"

const AllProperties = () => {
  return (
    <div className='w-full flex flex-col'>
      <h1 className="text-3xl font-bold">
        Property Listing
      </h1>
      <div className="flex flex-col mt-8">
        <div>
          <SearchComponent />
          <PropertyFilterMobile />
        </div>
        <div className="w-full flex gap-4">
          <div className="hidden md:flex w-[30%]">
            <PropertyFilter />
          </div>
          <Collection 
            data={["1", "2", "3", "4", "5"]}
            emptyTitle="No Properties Found"
            emptySubtitle="Come back later..."
            page={1}
            limit={8}
            collectionType="All_Properties"
          />
        </div>
      </div>
    </div>
  )
}

export default AllProperties