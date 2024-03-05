import Input from "@/Components/Input";
import Image from "next/image";

function auth() {
  return (
    <div className="realtive h-full w-full bg-[url('/hero.jpg')] bg-no-repeat">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-6">
          <Image
            src="/logo.png"
            width={160}
            height={120}
            className="h-12"
            alt="netflix logo"
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center">
            <Input></Input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default auth;
