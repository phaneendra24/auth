import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(request: Request) {
  const req = await request.json();
  try {
    const resp = await prisma.user.create({
      data: {
        username: req.username,
        role: "user",
        password: {
          create: {
            pwd: req.password,
          },
        },
      },
    });
    return NextResponse.json({ success: "user created successfully!" });
  } catch (e) {
    return NextResponse.json({ error: "enter unique" });
  }
}
