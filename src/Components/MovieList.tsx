"use client";
import { useMovieList } from "@/app/hooks/useMovieList";
import { MovieInterface } from "@/types";
import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";

interface MovieListprops {
  title: string;
}

export const MovieList: React.FC<MovieListprops> = ({ title }) => {
  const { data = [] } = useMovieList();
  const movies = data.movies;
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <div className="text-md mb-4 font-semibold text-white md:text-xl">
        <p className="mb-2"> {title}</p>
        <div className="grid grid-cols-4 gap-2">
          {movies?.map((movie: MovieInterface) => (
            <MovieCard key={movie.id} data={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};
