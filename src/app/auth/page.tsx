"use client";
import Input from "@/Components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat">
      <div className="bg-black  w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/logo.png"
            width={160}
            height={120}
            className="h-12"
            alt="netflix logo"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 w-full lg:max-w-md rounded-md">
            <h1 className=" text-3xl text-neutral-100 mb-4 font-bold ">
              {variant === "login" ? " Sign in" : "Register"}
            </h1>
            <div className="flex gap-4 flex-col">
              {variant === "register" && (
                <Input
                  label="Username"
                  value={username}
                  id="username"
                  type="username"
                  onChange={(ev: any) => {
                    setUsername(ev.target.value);
                  }}
                />
              )}
              <Input
                label="Email"
                value={email}
                id="email"
                type="email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
              />
              <Input
                label="Password"
                value={password}
                id="password"
                type="password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
              />
              <button className="w-full rounded-md py-3 bg-red-600 text-white font-medium mt-10 hover:bg-red-700 transition ">
                {variant === "login" ? " Sign in" : "Sign Up"}
              </button>

              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "First time on Netflix?"
                  : "Already have an account?"}

                <span
                  onClick={toggleVariant}
                  className="text-white hover:cursor-pointer hover:underline transition ml-1"
                >
                  {variant === "login" ? "Create an acount" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
