import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { redirect } from "next/navigation";
import { DOMAIN } from "@/app/utils/url";



export async function POST(req: NextRequest, res: NextApiResponse) {
  console.log("starting");
  const serializedData = serialize("jwttoken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
  });
  const response = NextResponse.json(
    {
      logout : "sucess"
    },
    {
      status: 200,
    },
  );
  response.headers.set("set-Cookie", serializedData);
  
return response
}

