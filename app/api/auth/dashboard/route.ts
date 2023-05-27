import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export function GET(req: NextApiRequest) {
  const reqst = req.body;
  const user = prisma.user.findUnique({
    where: {
      id: reqst.id,
    },
  });
  return NextResponse.json(user);
}
