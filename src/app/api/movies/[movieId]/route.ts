import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export const GET = async (
  req: NextRequest,
  { params }: { params: { movieId: string } }
) => {
  try {
    await serverAuth();

    if (!params || !params.movieId) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const movieId = params.movieId;

    if (typeof movieId !== "string") {
      return NextResponse.json({ error: "Invalid Id" }, { status: 405 });
    }

    if (!movieId) {
      return NextResponse.json({ error: "Invalid Id" }, { status: 405 });
    }
    const movie = await prismadb.movie.findUnique({ where: { id: movieId } });
    if (!movie) {
      return NextResponse.json({ error: "Invalid Id" }, { status: 405 });
    }
    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};
