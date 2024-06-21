"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { primePropertyFilters } from "@/constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AgentFilter = () => {

  return (
    <div className="border rounded-md w-full pl-4 mt-4">
      <h1 className="text-3xl font-semibold mt-4">Filter</h1>
      <div className="mt-4 mr-3">
        <Input placeholder="Enter City" className="rounded-full" />
      </div>

      <div className="mt-4 mr-3">
        <Select>
          <SelectTrigger className="w-full rounded-full">
            <SelectValue placeholder="Specializes in" />
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

export default AgentFilter;
