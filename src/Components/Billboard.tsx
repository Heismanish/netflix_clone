"use client";
import { useBillboard } from "@/app/hooks/useBillboard";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const { data, isLoading } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      {!isLoading && (
        <video
          className="w-full h-[56.25vw] object-cover brightness-60"
          src={data?.videoUrl}
          autoPlay
          muted
          loop
          poster={data?.thumbnailUrl}
        />
      )}
      <div className="absolute top-[35%] md:top-[40%] ml-4 md:ml-16 ">
        <p className="md:text-5xl lg:text-6xl font-bold drop-shadow-xl text-xl  text-white h-full w-[50%]">
          {" "}
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4">
          <button className="bg-white bg-opacity-40 text-white px-2 md:px-4 py-1 md:py-2 rounded-md text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex flex-row items-center">
            <AiOutlineInfoCircle className="mr-1 lg:mr-2" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
