import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryEnum } from "@/constants";
import { useState } from "react";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {

  return (
    <Select onValueChange={onChangeHandler}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Residential or Commercial?" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="residential">Residential</SelectItem>
        <SelectItem value="commercial">Commerical</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
