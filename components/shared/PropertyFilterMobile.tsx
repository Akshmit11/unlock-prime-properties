"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

const PropertyFilterMobile = () => {
  const [propertyCategory, setPropertyCategory] = useState("Residential");

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="border px-4 py-1 rounded-full">
          Filter
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetTitle className="text-left text-4xl">Filter</SheetTitle>
            <div className="text-left">
              <div className="flex flex-row space-x-4">
                <div
                  className={`px-4 py-1 border rounded-full ${
                    propertyCategory === "Residential" &&
                    "bg-primary text-white"
                  }`}
                  onClick={() => setPropertyCategory("Residential")}
                >
                  Residential
                </div>
                <div
                  className={`px-4 py-1 border rounded-full ${
                    propertyCategory === "Commercial" && "bg-primary text-white"
                  }`}
                  onClick={() => setPropertyCategory("Commercial")}
                >
                  Commercial
                </div>
              </div>

              <div className="w-full mt-4">
                <Input placeholder="Enter City" className="rounded-full" />
              </div>

              <div className="w-full mt-4">
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
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PropertyFilterMobile;
