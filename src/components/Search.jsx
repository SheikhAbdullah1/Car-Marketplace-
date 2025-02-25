import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";

function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      {/* Import Dropdown / Seletion Form shadcn  */}

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectContent>
      </Select>

      {/* Import separator From Shadcn */}

      <Separator orientation="vertical" className="hiddwn md:block" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Import separator From Shadcn */}

      <Separator orientation="vertical" className="hiddwn md:block" />

      {/* /* Import Dropdown / Seletion Form shadcn  */}

      <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing"/>
        </SelectTrigger>
        <SelectContent>
          {Data.CarPricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="text-[25px] bg-primary rounded-full p-3
       text-white hover:scale-105 transition-all cursor-pointer"
      >
        {/* Import search icon From react-icons */}
        <CiSearch />
      
      </div>
    </div>
  );
}

export default Search;
