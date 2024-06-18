"use client"

import { primePropertyFilters } from "@/constants";
import { useState } from "react";
import Collection from "./Collection";
import { Button } from "../ui/button";
import Link from "next/link";

const PrimePropertyFilter = () => {

  const [activePrimeFilter, setActivePrimeFilter] = useState("View All");


  return (
    <div className="mt-8">
      <h1 className="text-center text-primary font-semibold uppercase tracking-widest text-sm">
        Prime Properties
      </h1>
      <h1 className="text-black font-extrabold text-2xl text-center mt-2">
        Recommended for you
      </h1>

      <div className="mt-4 flex gap-4 justify-center flex-wrap">
        {primePropertyFilters.map((item, i) => (
          <div className={`border rounded-full w-24 cursor-pointer hover:shadow-sm text-center py-1 ${activePrimeFilter === item && 'bg-primary text-white border-0'}`} onClick={() => setActivePrimeFilter(item)} key={i}>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <Collection
        data={["1", "2", "3"]}
        emptyTitle={"No Properties Found"}
        emptySubtitle={"Come back later"}
        limit={6}
        page={1}
        totalPages={1}
        collectionType={"Prime_Properties"}
      />

      <div className="w-full flex justify-center mt-8">
        <Link href={'/prime-properties'}>
          <Button className="">
            View All Prime Properties
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PrimePropertyFilter;
