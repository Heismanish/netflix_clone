import { authOptions } from "@/lib/authOptions";
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export const GET = async (req: NextRequest) => {
  try {
    const user = await serverAuth();
    console.log(user);

    const movieCount = await prismadb.movie.count();
    console.log(1);

    const randomIndex = Math.floor(Math.random() * movieCount);
    console.log(2);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    console.log(randomMovies[0]);

    return NextResponse.json(randomMovies[0], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 401 });
  }
};
export const dynamic = "force-dynamic";
