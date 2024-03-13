"use client";
import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { useFavourites } from "../app/hooks/useFavourites";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useCurrentUser from "@/app/hooks/useCurrentUser";

interface FavouriteBtnProps {
  movieId: string;
}

const FavouriteBtn: React.FC<FavouriteBtnProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.currentUser?.favouriteIds;
    return list?.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFunction = async () => {
    let response;
    console.log(isFavourite);

    if (isFavourite) {
      console.log("DELETE");
      response = await axios.delete("api/favourite", { data: { movieId } });
    } else {
      response = await axios.post("api/favourite", { movieId });
    }
    const updatedFavouriteIds = response?.data?.favouriteIds;
    console.log(updatedFavouriteIds);

    mutate({ ...currentUser, favouriteIds: updatedFavouriteIds });
    mutateFavourites();
    console.log(isFavourite);
  };

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFunction}
      className="cursor-pointer group/item w-6-h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavouriteBtn;
