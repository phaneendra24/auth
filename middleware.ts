import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { DOMAIN } from "./app/utils/url";

const secret = new TextEncoder().encode(process.env.SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwttoken")?.value || "";
  try {
    const verifyStatus = await jose.jwtVerify(token, secret);
    const id = verifyStatus.payload.id;
    const path = req.nextUrl.pathname;
    if (verifyStatus && path !== "/login") {
      console.log("validated");
      return NextResponse.next();
    }
    console.log("Redirecting");
    return NextResponse.redirect(`${DOMAIN}/login`);
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(`${DOMAIN}/login`);
  }
}

export const config = {
  matcher: "/",
};
