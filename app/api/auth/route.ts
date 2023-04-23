import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";
export async function GET(request: Request) {
  const data = await prisma.user.findMany();
  return NextResponse.json({ data });
}
