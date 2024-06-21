import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const PropertyImageCarousel = ({ data }: { data: string[] | undefined }) => {
  return (
    <Carousel className="w-full max-w-[200px] sm:max-w-[500px] md:max-w-[700px] mx-auto">
      <CarouselContent>
        {data?.map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="border rounded-md">
                <div className="flex aspect-square items-center justify-center p-2">
                  <h1>Page {url}</h1>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PropertyImageCarousel