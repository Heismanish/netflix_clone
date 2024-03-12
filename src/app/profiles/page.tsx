import WatchersList from "@/Components/WatchersList";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Profiles = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth");
  }
  console.log(session.user?.name);
  return (
    <div className="flex h-full justify-center items-center">
      <div className="bg-zinc-900 flex flex-col">
        <h1 className="text-white text-3xl md:text-6xl text-center">
          Who is watching?
        </h1>
        <div className="flex justify-center items-center gap-8 mt-10">
          <WatchersList userName={session.user?.name || ""}></WatchersList>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
