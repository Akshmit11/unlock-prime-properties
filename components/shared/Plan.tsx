"use client"

import { features } from "@/constants";
import { Button } from "../ui/button";

interface PlanProps {
  target: "Agent" | "Builder";
}

const Plan = ({ target }: PlanProps) => {

    const handlePayment = async () => {
        
    }

  return (
    <div className="text-center sm:text-left h-fit w-full md:w-1/2 rounded-lg p-4 border-[2px] shadow-sm space-y-4">
      <h1 className="text-center sm:text-left font-bold text-4xl">
        Rs. {features[target].price}
        <span className="text-lg italic font-normal"> / year</span>
      </h1>
      <h2 className="mt-4 text-2xl font-semibold">{features[target].plan_name}</h2>
      <p>Join us for every year for reasonable price</p>
      <Button onClick={handlePayment}>Subscribe Now</Button>
    </div>
  );
};

export default Plan;
