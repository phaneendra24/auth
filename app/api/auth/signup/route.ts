import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(request: Request) {
  const req = await request.json();
  const userexits = await prisma.user.findUnique({
    where :{
      username : req.username
    }
  })
  if (userexits) {
    return NextResponse.json({error : "username already taken"},{
      status: 409
    })
  }
  try {
    const role = req.role
    const resp = await prisma.user.create({
      data: {
        username: req.username,
        role : role ?'ADMIN': 'USER',
        password: {
          create: {
            pwd: req.password,
          },
        },
      },
    });
    return NextResponse.json({ success: "user created successfully!" });
  } catch (e) {
    console.log(e); 
    return NextResponse.json({ error: "enter unique" },{status : 404});
  }
}
