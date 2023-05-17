import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";
import jwt from "jsonwebtoken";

let key = "asdfasdfasdfasdfsdfoisdfonaofbaornasdfasdfadsf";

export async function POST(Request: Request) {
  const req = await Request.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.username,
      },
    });
    console.log(user);

    const password = await prisma.password.findUnique({
      where: {
        userId: "clhrs6hsz0024v055smxjcan0",
      },
    });

    if (password?.pwd !== req.password) {
      return NextResponse.json(
        {
          error: "password incorrect",
        },
        {
          status: 401,
        }
      );
    }
    const token = await jwt.sign({ id: user?.id }, key);
    return NextResponse.json(
      { token },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json({ error: "something went wrong" });
  }
}
