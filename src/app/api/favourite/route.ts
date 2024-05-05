// import { NextRequest, NextResponse } from "next/server";
// import prismadb from "@/lib/prismadb";
// import serverAuth from "@/lib/serverAuth";
// import { without } from "lodash";

// export async function handler(req: NextRequest) {
//   try {
//     if (req.method === "POST") {
//       const { currentUser } = await serverAuth();

//       const { movieId } = await req.json();

//       const existingMovie = await prismadb.movie.findUnique({
//         where: { id: movieId },
//       });

//       if (!existingMovie) {
//         return NextResponse.json(
//           { error: "Movie doesn't exists" },
//           { status: 404 }
//         );
//       }
//       const user = await prismadb.user.update({
//         where: { email: currentUser?.email },
//         data: { favouriteIds: { push: movieId } },
//       });
//       return NextResponse.json(user, { status: 200 });
//     }
//     if (req.method === "DELETE") {
//       const { currentUser } = await serverAuth();
//       const { movieId } = await req.json();

//       const existingMovie = await prismadb.movie.findUnique({
//         where: { id: movieId },
//       });

//       if (!existingMovie) {
//         return NextResponse.json(
//           { error: "Movie doesn't exists" },
//           { status: 404 }
//         );
//       }
//       const updatedFavouriteIds = without(currentUser.favouriteIds);

//       const updatedUser = await prismadb.user.update({
//         where: { email: currentUser?.email },
//         data: { favouriteIds: updatedFavouriteIds },
//       });
//       return NextResponse.json(updatedUser, { status: 200 });
//     }

//     return NextResponse.json({ status: 405 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";

export const POST = async (req: NextRequest) => {
  try {
    // if (req.method === "POST") {
    const { currentUser } = await serverAuth();

    const { movieId } = await req.json();
    console.log(movieId);
    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });

    if (!existingMovie) {
      return NextResponse.json(
        { error: "Movie doesn't exists" },
        { status: 404 }
      );
    }
    const user = await prismadb.user.update({
      where: { email: currentUser?.email },
      data: { favouriteIds: { push: movieId } },
    });
    return NextResponse.json(user, { status: 200 });
    // }
    // if (req.method === "DELETE") {
    //   const { currentUser } = await serverAuth();
    //   const { movieId } = await req.json();

    //   const existingMovie = await prismadb.movie.findUnique({
    //     where: { id: movieId },
    //   });

    //   if (!existingMovie) {
    //     return NextResponse.json(
    //       { error: "Movie doesn't exists" },
    //       { status: 404 }
    //     );
    //   }
    //   const updatedFavouriteIds = without(currentUser.favouriteIds);

    //   const updatedUser = await prismadb.user.update({
    //     where: { email: currentUser?.email },
    //     data: { favouriteIds: updatedFavouriteIds },
    //   });
    //   return NextResponse.json(updatedUser, { status: 200 });
    // }

    // return NextResponse.json({ status: 405 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();
    console.log(movieId);

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });
    console.log(existingMovie);

    if (!existingMovie) {
      return NextResponse.json(
        { error: "Movie doesn't exists" },
        { status: 404 }
      );
    }
    const updatedFavouriteIds = without(currentUser.favouriteIds, movieId);

    console.log(updatedFavouriteIds);

    const updatedUser = await prismadb.user.update({
      where: { email: currentUser?.email },
      data: { favouriteIds: updatedFavouriteIds },
    });

    console.log(updatedUser);

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};
