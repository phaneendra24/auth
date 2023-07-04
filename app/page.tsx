"use client";
import { redirect } from "next/navigation";
import Getuserdata from "./components/getuserdata";
import { DOMAIN } from "./utils/url";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const doLogout = async () => {
    const resp = await fetch(`${DOMAIN}/api/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (resp.status === 200) {
      router.push("/");
    }
  };
  return (
    <div className=" first-letter:w-full h-[100vh] w-full flex flex-col gap-10 justify-center items-center">
      <div className="bg-gray-700 w-fit text-center p-1">Dashboard✨</div>
      <div className="rounded-xl flex flex-col items-center bg-gray-700 w-fit min-w-[40%]  p-10">
        <Getuserdata />
        <div className="w-full mt-5 flex justify-center">
          <button
            className="w-fit py-2 px-10 bg-black "
            onClick={() => doLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
