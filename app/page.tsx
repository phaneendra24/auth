"use client";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

export default function Home() {
  console.log("start");

  const gettoken = async () => {
    const resp = await fetch("http://localhost:3000/api/auth/profile");
    const data = await resp.json();
    if (resp.status === 200) {
      console.log("success");
    } else {
      console.log("fail");
    }

    return data;
  };
  gettoken();

  return <div>Home page</div>;
}
