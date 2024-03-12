import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Browse from "./Browse";
import { BsBell, BsSearch } from "react-icons/bs";
import Accounts from "./Accounts";

// TODO: Make this navbar change bg after it has scrolled in y direction.
const Navbar = () => {
  return (
    <div className="w-full fixed z-40">
      <div className="flex flex-row items-center px-4 md:px-16 py-6 transition duration-500 bg-zinc-900 bg-opacity-90">
        <Image
          width={64}
          height={16}
          src="/Images/logo.png"
          alt="Netflix Logo"
          className="h-4 lg:h-7"
        />
        <div className=" flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="News & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>

        {/* Menu */}
        <div className="flex flex-row  items-center gap-2 ml-4 md:ml-8 lg:hidden cursor-pointer relative">
          <Browse />
        </div>

        {/* Right Navbar */}
        <div className="ml-auto flex flex-row gap-7 items-center">
          <div className="text-gray-200  hover:text-gray-300 transition cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200  hover:text-gray-300 transition cursor-pointer">
            <BsBell />
          </div>

          {/* Profile */}
          <Accounts />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
