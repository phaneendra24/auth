"use client";

import { useState } from "react";

export default function Home() {
  console.log("re-rendering");
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const fetchdata = async () => {
    const resp = await fetch("http://localhost:3000/api/auth/dashboard", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    setname(data.username);
    setrole(data.role);
    return data;
  };
  const userdata = fetchdata();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" w-[35%] flex flex-col gap-5">
        <div>Welcome to the dashboard!</div>
        <div className="flex justify-between gap-5 pr-[50%]">
          <div className="border-[0.6px] w-fit p-1 rounded-lg border-white">
            name
          </div>
          <span> {name}</span>
        </div>
        <div className="flex justify-between gap-5 pr-[50%]">
          <div className="border-[0.6px] w-fit p-1 rounded-lg border-white">
            role
          </div>
          <span> {role}</span>
        </div>
      </div>
    </div>
  );
}
