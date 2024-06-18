import Image from "next/image"

const OurServices = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-primary font-semibold uppercase tracking-widest text-sm">
        Our Services
      </h1>
      <h1 className="text-black font-extrabold text-2xl text-center mt-2">
        What we do?
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-3 justify-center mt-4 flex-wrap">
        <div className="w-full md:w-1/4 flex flex-col rounded-md hover:shadow-md p-4 border items-center text-center">
          <Image 
            src={'/assets/sell-house-img.webp'}
            alt="Sell a Property"
            width={200}
            height={200}
            className="w-48 h-48 object-cover object-center rounded-md"
          />

          <h1 className="mt-6 text-2xl font-bold">Sell a Property</h1>
          <h1 className="mt-1 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto magni.</h1>
          
        </div>
        <div className="w-full md:w-1/4 flex flex-col rounded-md hover:shadow-md p-4 border items-center text-center">
        <Image 
            src={'/assets/buy-house-img.webp'}
            alt="Buy a Property"
            width={200}
            height={200}
            className="w-48 h-48 object-cover object-center rounded-md"
          />

          <h1 className="mt-6 text-2xl font-bold">Buy a Property</h1>
          <h1 className="mt-1 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto magni.</h1>
          
        </div>
        <div className="w-full md:w-1/4 flex flex-col rounded-md hover:shadow-md p-4 border items-center text-center">
        <Image 
            src={'/assets/agent-img.webp'}
            alt="Register Yourself As Agent"
            width={200}
            height={300}
            className="w-48 h-48 object-cover object-center rounded-md"
          />

          <h1 className="mt-6 text-2xl font-bold">Become a Agent</h1>
          <h1 className="mt-1 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto magni.</h1>
          
        </div>
      </div>
    </div>
  )
}

export default OurServices