"use client";

import fetcher from "@/lib/fetcher";
import useSwr from "swr";

export const useFavourites = () => {
  const { data, error, isLoading, mutate } = useSwr(
    "/api/favourites",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(data);

  return { data, error, isLoading, mutate };
};
