"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useStore } from "../store";
import { DOMAIN } from "../utils/url";

export default function Signin() {
  const router = useRouter();
  const [isadmin, setisadmin] = useState(false);

  const [username, setusername] = useState("");
  const [pwd, setpwd] = useState("");
  const [visible, setvisible] = useState(false);

  const [id, updateid] = useStore((state: any) => [state.id, state.updateid]);

  const signinsubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resp = await fetch(`${DOMAIN}/api/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: pwd }),
    });
    const { id } = await resp.json();
    if (resp.status === 200) {
      updateid(id);
      router.push(`${DOMAIN}`);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col mt-2 justify-center items-center"
      onSubmit={signinsubmit}
    >
      <label className="my-2 w-full">Username</label>
      <input
        type="text"
        required
        className="w-full py-2 rounded-md outline-none border-[2px] px-2 border-gray-500"
        onChange={(e) => setusername(e.currentTarget.value)}
      />

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
          className=" absolute top-[30%] right-2 cursor-pointer"
          onClick={() => {
            setvisible(!visible);
          }}
        >
          {visible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </button>

        <div className="flex my-3">
          <span className="w-[50%] flex justify-center items-center">
            <button
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
      </div>
      <button
        className="w-full mt-5 px-5 py-3 bg-black text-white"
        onClick={signinsubmit}
      >
        submit
      </button>
    </form>
  );
}
