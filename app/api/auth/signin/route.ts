import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";
import jwt from "jsonwebtoken";
import { NextApiResponse } from "next";
import { serialize } from "cookie";

let key = "asdfasdfasdfasdfsdfoisdfonaofbaornasdfasdfadsf";

type usertype = {
  id: string;
  username: string;
  role: string;
};

export async function POST(Request: Request, res: NextApiResponse) {
  const req = await Request.json();
  const username: string = req.username;
  try {
    const user = await prisma?.user.findUnique({
      where: {
        username: username,
      },
    });
    const pwdobj = await prisma?.password.findUnique({
      where: {
        userId: user?.id,
      },
    });

    if (pwdobj?.pwd !== req.password) {
      return NextResponse.json(
        {
          error: "password incorrect",
        },
        {
          status: 401,
        }
      );
    }
    const token = jwt.sign({ id: user?.id }, key);

    const serializedData = serialize("jwttoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    const response = NextResponse.json(
      {
        id: user?.id,
      },
      {
        status: 200,
      }
    );

    response.headers.set("set-Cookie", serializedData);
    return response;
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "something went wrong" });
  }
}
