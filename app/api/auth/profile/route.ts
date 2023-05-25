import { NextResponse } from "next/server";
// export async function POST(Request: Request) {
//   return NextResponse.json({});
// }
import jwt from "jsonwebtoken";

import { NextApiRequest, NextApiResponse } from "next";

let key = "asdfasdfasdfasdfsdfoisdfonaofbaornasdfasdfadsf";

export function GET(req: NextApiRequest) {
  // Assuming the cookie name is 'token'

  return NextResponse.json({ profile: "empty" });
}
