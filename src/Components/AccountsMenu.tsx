import React from "react";
import Image from "next/image";
import Logout from "./Logout";
import useCurrentUser from "@/app/hooks/useCurrentUser";

interface AccountsMenuInterface {
  visible?: boolean;
}

const AccountsMenu: React.FC<AccountsMenuInterface> = ({ visible }) => {
  const { data } = useCurrentUser();
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 py-5 border-2 border-gray-800 absolute right-0 top-14 flex-col">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            height={20}
            width={20}
            src={"/Images/default-red.png"}
            alt="other users"
            className="w-8 h-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline transition">
            {data?.currentUser?.name}
          </p>
        </div>
        <hr className="border-0 bg-gray-600 h-px my-4" />
        <Logout label="Sign out of Netflix" />
      </div>
    </div>
  );
};

export default AccountsMenu;
