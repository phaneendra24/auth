import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const secret = new TextEncoder().encode(
  "asdfasdfasdfasdfsdfoisdfonaofbaornasdfasdfadsf"
);

export async function middleware(req: NextRequest) {
  let reponse = NextResponse.next();
  const token = req.cookies.get("jwttoken")?.value || "";
  try {
    const verifyStatus = await jose.jwtVerify(token, secret);
    const id = typeof verifyStatus.payload.id;

    const path = req.nextUrl.pathname;

    if (verifyStatus && path !== "/login") {
      console.log("start");
      const req = await fetch("http://localhost:3000/api/auth/dashboard");

      return NextResponse.next();
    }
    return NextResponse.redirect("http:localhost:3000/login");
  } catch (e) {
    console.log(e);

    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: "/",
};
