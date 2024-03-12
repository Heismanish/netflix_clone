"use client";
import React, { useCallback, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <div
      onClick={toggleMobileMenu}
      className="flex flex-row  items-center gap-2 ml-8 lg:hidden cursor-pointer hover:text-gray-200 transition"
    >
      <p className="text-white text-sm ">Browse</p>
      <BsChevronDown
        className={`text-white transition ${
          showMobileMenu ? "rotate-180" : "rotate-0"
        }`}
      />
      <MobileMenu visible={showMobileMenu} />
    </div>
  );
};

export default Menu;
