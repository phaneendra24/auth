"use client";
import React, { useState } from "react";
import { DOMAIN } from "../utils/url";
import Openeye from "../utils/svgs/openeye"
import Closeeye from "../utils/svgs/closeeye"

function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isadmin, setisadmin] = useState(false);
  const [visible, setvisible] = useState(false);
  const [loading, setloading] = useState(false);
  
// state for username exits or not
  const [usernameexits,setusernameexits] = useState(false)
  const [usercreate,setusercreate] = useState(false)
  const Createuser = async (e: React.FormEvent) => {
    setloading(true)
    e.preventDefault();
    if (username !== "") {
      const resp = await fetch(`${DOMAIN}/api/auth/signup`, {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password,role : isadmin}),
      });
      const data = await resp.json()
      if(resp.status==409){
        setloading(false)
        setusernameexits(true)
      }
      if (resp.status==200) {
        setusercreate(true)
        setusernameexits(false)
        setloading(false);
      }
    }
  };

  return (
    <form className="flex flex-col mt-2 " onSubmit={(e) => Createuser(e)}>
      <label htmlFor="isadminname" className="my-2">
        {isadmin ? <>admin&apos;s name</> : <>Username</>}
      </label>
      <input
        type="text"
        className="w-full py-2 outline-none border-[2px] px-2 border-gray-500"
        onChange={(e) => setusername(e.currentTarget.value)}
        required
      />
      <span className="h-5 text-red-700">{usernameexits? <>username already taken</>:<></>}</span>
      <label htmlFor="password" className="my-2">
        Password
      </label>
      <div className="relative w-full">
        <input
          required
          type={`${visible ? "text" : "password"}`}
          className={`py-2 w-full outline-none border-[2px] px-2 border-gray-500`}
          onChange={(e) => setpassword(e.currentTarget.value)}
        />
        <button
          type="button"
          className=" absolute top-[30%] right-2 cursor-pointer"
          onClick={() => {
            setvisible(!visible);
            console.log("click");
          }}
        >
          {visible ? (
            <Openeye />
          ) : (
            <Closeeye />
          )}
        </button>
      </div>

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
            className={`ml-2 underline-offset-4 ${isadmin ? "" : "underline"}`}
          >
            user
          </label>
        </span>
        <span className="w-[50%] flex justify-center items-center">
          <button type="button"
            className={`border-2 border-gray-950 rounded-full p-2 ${
              isadmin ? "bg-gray-700 border-black " : ""
            }`}
            onClick={() => {
              setisadmin(true);
            }}
          ></button>
          <label
            htmlFor=""
            className={`ml-2 underline-offset-4 ${isadmin ? "underline" : ""}`}
          >
            Admin
          </label>
        </span>
      </div>
      <button
        className={`w-full mt-5 px-5 py-3 bg-black text-white ${!loading ? '' :'disabled cursor-not-allowed opacity-30 animate-pulse'}`}
        type="submit"
      >
        create
      </button>
   <div className="flex justify-center mt-2">
    {usercreate ?<div className="text-green-600 animate-bounce">user is created go for signin</div>:<></> }
   </div>
    </form>
  );
}

export default Signup;
