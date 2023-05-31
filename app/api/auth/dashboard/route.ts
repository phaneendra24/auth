import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("jwttoken")?.value || "nill";
    console.log("token", token);

    const decodeJwt = jose.decodeJwt(token);
    let id: any = decodeJwt.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    console.log(user);
    // let user = {
    //   id: "asdfasdfajbasdfnaldsnf",
    //   username: "phani",
    //   role: "user",
    // };

    return NextResponse.json(user, {
      status: 200,
    });
  } catch (e) {
    console.log("error occured !!!!!!!!!!!!!!!!", e);
    return NextResponse.json("error");
  }
}
