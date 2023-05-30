import { Kaisei_Tokumin } from "next/font/google";

import type { NextRequest } from "next/server";
import * as jose from "jose";

import { cookies } from "next/headers";

export default async function Home(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwttoken")?.value || "";
  const { id } = jose.decodeJwt(token);

  const resp = await fetch("http://localhost:3000/api/auth/dashboard", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  const getuserdata = await resp.json();
  console.log(getuserdata);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" w-[35%] flex flex-col gap-5">
        <div>Welcome to the dashboard!</div>
        <div className="flex justify-between gap-5 pr-[50%]">
          <div className="border-[0.6px] w-fit p-1 rounded-lg border-white">
            name
          </div>
          <span> {getuserdata.user.username}</span>
        </div>
        <div className="flex justify-between gap-5 pr-[50%]">
          <div className="border-[0.6px] w-fit p-1 rounded-lg border-white">
            role
          </div>
          <span> {getuserdata.user.role}</span>
        </div>
      </div>
    </div>
  );
}
