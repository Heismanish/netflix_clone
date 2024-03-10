"use client";
import Image from "next/image";
import React from "react";

const WatchersList = ({ userName }: { userName: string }) => {
  return (
    <div onClick={() => {}}>
      <div className="group w-44 mx-auto flex-row  ">
        {/* Profile Image */}
        <div className="w-44 h-44 rounded-md flex justify-center items-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden transition">
          <Image
            height={250}
            width={250}
            alt="profile"
            src="/Images/default-red.png"
          />
        </div>
        {/* Name */}
        <div className="text-2xl mt-4 text-gray-400 text-center group-hover:text-white">
          {userName}
        </div>
      </div>
    </div>
  );
};

export default WatchersList;
