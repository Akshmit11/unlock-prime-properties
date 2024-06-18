import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryEnum } from "@/constants";
import { useState } from "react";

type DropdownPropertyTypeProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const DropdownPropertyType = ({ value, onChangeHandler }: DropdownPropertyTypeProps) => {

  return (
    <Select onValueChange={onChangeHandler}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="What kind of property you have?" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="plot/land">Plot/Land</SelectItem>
        <SelectItem value="flat">Flat</SelectItem>
        <SelectItem value="house">House</SelectItem>
        <SelectItem value="office">Office</SelectItem>
        <SelectItem value="storage">Storage</SelectItem>
        <SelectItem value="industry">Industry</SelectItem>
        <SelectItem value="hospital">Hospital</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DropdownPropertyType;
