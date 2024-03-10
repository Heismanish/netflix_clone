"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function Logout() {
  const router = useRouter();
  return (
    <button
      className="bg-white p-4 rounded-md"
      onClick={() => {
        signOut();
        router.push("/auth");
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
