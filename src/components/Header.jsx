import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();

  return (

    // Header/ Navbar Strat

    <div className="flex justify-between items-center shadow-sm p-5">
      <h1 className="text-2xl font-semibold ml-5">Car Market</h1>
      {/* <img width={150} height={100} src="" /> */}

      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Preowned
        </li>
      </ul>

    {/* Check the user is Signin */}
      
      {isSignedIn ? (
        <div className="flex gap-5">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
}

export default Header;
