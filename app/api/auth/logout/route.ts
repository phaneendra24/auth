import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function GET(req: NextRequest, res: NextApiResponse) {
  console.log("starting");

}

