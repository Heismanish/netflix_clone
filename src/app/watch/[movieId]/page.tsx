"use client";
import { useMovie } from "@/app/hooks/useMovie";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = useParams();
  console.log(movieId);

  const { data, error } = useMovie(movieId as string);
  console.log(data, error);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer hover:text-gray-300 transition"
          size={30}
        />
        <p className="text-white text-xl md:text-3xl font-bold ">
          <span className="font-light mr-1"> Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        src={data?.videoUrl}
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
