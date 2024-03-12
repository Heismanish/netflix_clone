import Logout from "@/Components/Logout";
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
      <Navbar />
      {/* <h1 className="text-white">{JSON.stringify(session?.user?.name)}</h1>
      <h1 className="text-white text-3xl">Netflix clone</h1>
      <Logout /> */}
    </div>
  );
}
