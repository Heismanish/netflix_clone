import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("aj");
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    console.log(username);
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ err: "User already exists" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const createNewUser = await prismadb.user.create({
      data: {
        name: username,
        hashedPassword,
        email,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json({ createNewUser, success: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
