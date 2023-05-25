import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const jwt = req.cookies.get("token");
  console.log(jwt);

  // if (request.nextUrl.pathname.startsWith("/login")) {
  //   if (jwt) {
  //     return NextResponse.redirect("/");
  //   }
  // }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
