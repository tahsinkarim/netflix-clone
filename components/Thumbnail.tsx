import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className='relative h-28 min-w-[180px] curser-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className='rounded-sm object-cover md:rounded'
        fill
        alt={movie.name}
      />
    </div>
  );
};

export default Thumbnail;
