import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
export const GET = async () => {
  try {
    const { currentUser } = await serverAuth();
    const favourites = await prismadb.movie.findMany({
      where: { id: { in: currentUser?.favouriteIds } },
    });
    console.log("POLIO", favourites);
    return NextResponse.json(favourites, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
