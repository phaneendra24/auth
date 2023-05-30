import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const secret = new TextEncoder().encode(process.env.SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwttoken")?.value || "";
  try {
    const verifyStatus = await jose.jwtVerify(token, secret);
    const id = verifyStatus.payload.id;
    const path = req.nextUrl.pathname;
    if (verifyStatus && path !== "/login") {
      const resp = await fetch("http://localhost:3000/api/auth/dashboard", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const user = await resp.json();
      return NextResponse.next();
      // return NextResponse.json({ message: user }, { status: 200 });
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
