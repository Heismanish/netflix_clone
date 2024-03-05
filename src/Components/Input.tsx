import React from "react";

function Input() {
  return (
    <div className="relative">
      <input
        id="email"
        // type="text"
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md bg-neutral-700 appearance-none focus:outlne-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 left-6 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor="email"
      >
        Email
      </label>
    </div>
  );
}

export default Input;
