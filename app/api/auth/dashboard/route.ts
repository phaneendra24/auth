import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(Request: Request) {
  const req = await Request.json();
  const user = await prisma.user.findUnique({
    where: {
      id: req.id,
    },
  });

  return NextResponse.json({ user: user });
}
