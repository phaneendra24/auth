import { useState } from "react";
import { DOMAIN } from "../utils/url";

export default function Getuserdata() {
  const [name, setname] = useState("");
  const [Loading, setLoading] = useState(true);
  const [role, setrole] = useState("");
  const fetchdata = async () => {
    const resp = await fetch(`${DOMAIN}/api/auth/dashboard`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    console.log("status", resp.status);
    if (resp.status === 200) {
      setLoading(false);
    }
    const data = await resp.json();

    setname(data.username);
    setrole(data.role);
    return data;
  };
  fetchdata();
  return (
    <>
      <div className="text-white w-fit flex justify-between gap-10 sm:gap-20">
        <span className="w-fit p-2 bg-slate-900 rounded-lg">Name</span>
        <span>
          {Loading ? (
            <div className="h-5 w-full bg-gray-900 animate-pulse"></div>
          ) : (
            <div className="p-1 rounded-sm w-fit bg-black">{name}</div>
          )}
        </span>
      </div>
      <div className="text-white w-fit flex justify-between gap-10 sm:gap-20 mt-5 pl-3">
        <span className="w-fit p-2 bg-slate-900 rounded-lg">Role</span>
        <span>
          {Loading ? (
            <div className="h-5 w-full bg-gray-900 animate-pulse"></div>
          ) : (
            <div className="p-1 rounded-sm w-fit bg-black">{role}</div>
          )}
        </span>
      </div>
    </>
  );
}
