import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("jwttoken")?.value || "nill";
    const { id } = jose.decodeJwt(token);
    console.log("token", id);
    return NextResponse.json(token);
  } catch (e) {
    console.log(e);
    return e;
  }
}
