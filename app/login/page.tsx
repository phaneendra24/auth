"use client";
import { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

export default function login() {
  const [user, setuser] = useState(true);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className={`w-[80%] h-10  bg-gray-200 p-[4px] rounded-md `}>
        <button
          className={`w-[50%] ${user ? "bg-white" : ""} h-full  rounded-md
          ${user ? "" : "animate-pulse"}

          `}
          onClick={() => setuser(true)}
        >
          Signin
        </button>
        <button
          className={`w-[50%] ${user ? "" : "bg-white"} h-full rounded-md  
          ${user ? "animate-pulse" : ""}
          `}
          onClick={() => setuser(false)}
        >
          Signup
        </button>
      </div>
      <div className="w-full px-10">{user ? <Signin /> : <Signup />}</div>
    </div>
  );
}
