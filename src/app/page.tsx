import Billboard from "@/Components/Billboard";
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
      <Billboard />
    </div>
  );
}
