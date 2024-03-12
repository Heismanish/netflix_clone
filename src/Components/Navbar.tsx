"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import Browse from "./Browse";
import { BsBell, BsSearch } from "react-icons/bs";
import Accounts from "./Accounts";

const TOP_OFFSET = 66;

// TODO: Make this navbar change bg after it has scrolled in y direction.
const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="w-full bg-transparent fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Image
          width={84}
          height={32}
          src="/Images/logo.png"
          alt="Netflix Logo"
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
    </nav>
  );
};

export default Navbar;
