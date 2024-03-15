"use client";

import fetcher from "@/lib/fetcher";
import useSwr from "swr";

export const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSwr(`/api/movies/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data, id);
  return { data, error, isLoading };
};
