"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoutProps {
  label?: string;
}
const Logout: React.FC<LogoutProps> = ({ label }) => {
  const router = useRouter();
  return (
    <div
      className="px-3 text-center text-white hover:underline transition text-sm"
      onClick={() => {
        signOut();
        router.push("/auth");
      }}
    >
      {label || "Logout"}
    </div>
  );
};

export default Logout;
