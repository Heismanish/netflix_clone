"use client";
import { MovieInterface } from "@/types";
import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";
import { useFavourites } from "@/app/hooks/useFavourites";

interface MyListProps {
  title: string;
}

export const MyList: React.FC<MyListProps> = ({ title }) => {
  const { data: movies = [] }: { data: MovieInterface[] } = useFavourites();
  console.log(movies);
  if (isEmpty(movies)) {
    return null;
  }

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div className="text-md mb-4 font-semibold text-white md:text-xl">
        <p className="mb-2"> {title}</p>
        <div className="grid grid-cols-4 gap-2">
          {movies?.map((movie: MovieInterface) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
