// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";
// import { authOptions } from "./lib/authOptions";
// import prismadb from "@/lib/prismadb";

// export const middleware = async () => {
//   const session = await getServerSession(authOptions);
//   console.log(session);
//   if (!session?.user?.email) {
//     return NextResponse.json({ error: "NO EXISTING SESSION" }, { status: 404 });
//   }

//   const currentUser = await prismadb.user.findUnique({
//     where: { email: session.user.email },
//   });

//   if (!currentUser) {
//     throw new Error("Not signed in");
//   }

//   return NextResponse.next();
// };
// // middleware.js
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };
