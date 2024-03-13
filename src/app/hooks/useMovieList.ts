"use client";

import fetcher from "@/lib/fetcher";
import useSwr from "swr";

export const useMovieList = () => {
  const { data, error, isLoading } = useSwr("/api/movies", fetcher);
  return { data, error, isLoading };
};
