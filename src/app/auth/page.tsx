"use client";
import Input from "@/Components/Input";
import Image from "next/image";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Auth: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      const res = await axios.post("/api/register", {
        email,
        password,
        username,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

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
              <button
                onClick={variant === "login" ? login : register}
                className="w-full rounded-md py-3 bg-red-600 text-white font-medium mt-10 hover:bg-red-700 transition "
              >
                {variant === "login" ? " Sign in" : "Sign Up"}
              </button>

              <div className="flex flex-row justify-center gap-4 mt-8 items-center">
                <div
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-70 transition "
                >
                  <FcGoogle size={30}></FcGoogle>
                </div>
                <div
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                  className="w-10 h-10 bg-white flex justify-center items-center rounded-full cursor-pointer hover:opacity-70 transition"
                >
                  <FaGithub size={30}></FaGithub>
                </div>
              </div>

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
