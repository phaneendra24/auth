"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useStore } from "../store";
import { DOMAIN } from "../utils/url";
import Openeye from "../utils/svgs/openeye";
import Closeeye from "../utils/svgs/closeeye";

export default function Signin() {
  const router = useRouter();
  const [isadmin, setisadmin] = useState(false);
  const [username, setusername] = useState("");
  const [pwd, setpwd] = useState("");
  const [visible, setvisible] = useState(false);

  // ui statuses
  const [userfound, setuserfound] = useState(true);
  const [pwdstatus, setpwdstatus] = useState(true);
  const [rolestatus, setrolestatus] = useState(true);
  // signin form submission
  const signinsubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resp = await fetch(`${DOMAIN}/api/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: pwd,
        role: isadmin ? "ADMIN" : "USER",
      }),
    });
    const data = await resp.json();
    if (resp.status === 200) {
      setpwdstatus(true);
      router.push(`${DOMAIN}`);
    } else if (resp.status == 401) {
      setuserfound(true);
      setpwdstatus(false);
      setrolestatus(true);
    } else if (resp.status == 409) {
      setuserfound(false);
      setpwdstatus(true);
      setrolestatus(true);
    } else if (resp.status == 412) {
      setuserfound(true);
      setpwdstatus(true);
      setrolestatus(false);
    }
  };

  return (
    <form
      className="flex flex-col mt-2 justify-center items-center"
      onSubmit={(e) => signinsubmit(e)}
    >
      <label className="my-2 w-full">Username</label>
      <input
        required
        type="text"
        className="w-full py-2 rounded-md outline-none border-[2px] px-2 border-gray-500"
        onChange={(e) => setusername(e.currentTarget.value)}
      />
      <span className="w-full h-5 text-red-700 flex justify-start">
        {!userfound ? <>user not found</> : <></>}
      </span>
      <label htmlFor="password" className="my-2 w-full">
        password
      </label>
      <div className="w-full relative">
        <input
          type={`${visible ? "text" : "password"}`}
          required
          className="w-full py-2 rounded-md outline-none border-[2px] px-2 border-gray-500"
          onChange={(e) => setpwd(e.currentTarget.value)}
        />
        <button
          type="button"
          className=" absolute top-[10%] right-2 cursor-pointer"
          onClick={() => {
            setvisible(!visible);
          }}
        >
          {visible ? <Openeye /> : <Closeeye />}
        </button>
        <span className="flex justify-center text-red-700 h-5">
          {pwdstatus ? "" : <>Password is incorrect</>}
        </span>
        <div className="flex my-3">
          <span className="w-[50%] flex justify-center items-center">
            <button
              type="button"
              className={`border-2 border-gray-950 rounded-full p-2 ${
                isadmin ? "" : "bg-gray-700 border-black "
              }`}
              onClick={() => {
                setisadmin(false);
              }}
            ></button>
            <label
              htmlFor=""
              className={`ml-2 underline-offset-4 ${
                isadmin ? "" : "underline"
              }`}
            >
              user
            </label>
          </span>
          <span className="w-[50%] flex justify-center items-center">
            <button
              type="button"
              className={`border-2 border-gray-950 rounded-full p-2 ${
                isadmin ? "bg-gray-700 border-black " : ""
              }`}
              onClick={() => {
                setisadmin(true);
              }}
            ></button>
            <label
              htmlFor=""
              className={`ml-2 underline-offset-4 ${
                isadmin ? "underline" : ""
              }`}
            >
              Admin
            </label>
          </span>
        </div>
        <span className="w-full text-red-700 flex  justify-center">
          {!rolestatus ? <>Incorrect Role Selection</> : <></>}
        </span>
      </div>
      <button
        className="w-full mt-5 px-5 py-3 bg-black text-white"
        type="submit"
      >
        submit
      </button>
      <span className="text-blue-300 mt-3">
        click on the signup button above to create an account
      </span>
    </form>
  );
}
