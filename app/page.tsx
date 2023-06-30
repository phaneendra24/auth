"use client";

import Getuserdata from "./components/getuserdata";

export default function Home() {

  return (
    <div className=" first-letter:w-full h-[100vh] w-full flex flex-col gap-10 justify-center items-center">
      <div className="bg-gray-700 w-fit text-center p-1">Dashboard✨</div>
      <div className="rounded-xl bg-gray-700 w-fit min-w-[40%] h-40 p-5">
        <Getuserdata />
        <button className="absolute top-10 right-5 sm:right-10 bg-gray-800 p-2">
          Logout
        </button>
      </div>
    </div>
  );
}