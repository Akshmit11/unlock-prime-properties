"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { primePropertyFilters } from "@/constants";
import { Button } from "../ui/button";

const PropertyFilter = () => {
  const [propertyCategory, setPropertyCategory] = useState("Residential");

  return (
    <div className="border rounded-md w-full pl-4 mt-4">
      <h1 className="text-3xl font-semibold mt-4">Filter</h1>
      <div className="flex gap-2 mt-4 mr-3">
        <div
          className={`border rounded-full px-4 py-1 cursor-pointer ${
            propertyCategory === "Residential" && "bg-primary text-white border-none"
          }`}
          onClick={() => setPropertyCategory("Residential")}
        >
          Residential
        </div>
        <div
          className={`border rounded-full px-4 py-1 cursor-pointer ${
            propertyCategory === "Commercial" && "bg-primary text-white border-none"
          }`}
          onClick={() => setPropertyCategory("Commercial")}
        >
          Commercial
        </div>
      </div>

      <div className="mt-4 mr-3">
        <Input placeholder="Enter City" className="rounded-full" />
      </div>

      <div className="mt-4 mr-3">
        <Select>
          <SelectTrigger className="w-full rounded-full">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            {primePropertyFilters.map((p, i) => (
              <SelectItem value={p} key={i}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button className="mt-4 bg-primary text-white rounded-full px-6">
        Submit
      </Button>
    </div>
  );
};

export default PropertyFilter;
