import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function GET(req: NextRequest, res: NextApiResponse) {
  console.log("starting");

  //   const resp = await fetch("http://localhost:3000/api/auth/dashboard", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application.json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //     }),
  //   });
}

// try {
//     res.setHeader("Set-Cookie", [
//       serialize("mytoken1", "", {
//         maxAge: -1,
//         path: "/",
//       }),
//       serialize("mytoken2", "", {
//         maxAge: -1,
//         path: "/",
//       }),
//     ]);
//     res.writeHead(302, { Location: "/api/login" });
//     res.end();
//     catch (E) {
//         console.log(E);
//       }
