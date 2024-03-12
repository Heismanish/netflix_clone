"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import AccountsMenu from "./AccountsMenu";

const Accounts = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const toggleAccountsMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <div
      onClick={toggleAccountsMenu}
      className="flex flex-row items-center gap-2 cursor-pointer"
    >
      <div className="flex w-6 h-6 lg:w-10 lg:h-10 rounded-md relative overflow-hidden ">
        <Image
          layout="fill"
          src={"/Images/default-red.png"}
          alt="current user"
          className="rounded-sm lg:rounded-md"
        />
      </div>
      <BsChevronDown
        className={`text-white hover:text-gray-200 transition ${
          showAccountMenu ? "rotate-180" : "rotate-0"
        }`}
      />
      <AccountsMenu visible={showAccountMenu} />
    </div>
  );
};

export default Accounts;
