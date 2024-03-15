import Billboard from "@/Components/Billboard";
import InfoModalParent from "@/Components/InfoModalParent";
import { MovieList } from "@/Components/MovieList";
import { MyList } from "@/Components/MyList";
import Navbar from "@/Components/Navbar";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }
  return (
    <div>
      <InfoModalParent />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" />
        <MyList title="My List" />
      </div>
    </div>
  );
}
