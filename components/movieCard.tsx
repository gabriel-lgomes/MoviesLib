import React, { FC } from "react";
import { Movie } from "../types/movie.interface";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

interface MovieCardProps {
  movies: Movie;
  urlPath: string;
}

const MovieCard: FC<MovieCardProps> = ({ movies, urlPath }) => {
  const { title, poster_path, vote_average, release_date, id } = movies;

  return (
    <Link href={`/${urlPath}/${id}`} className="py-4 lg:max-w-[180px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        height={100}
        width={180}
        priority
        className="rounded-md lg:min-h-[270px] transition-all hover:scale-105 hover:brightness-125"
      />
      <p
        className={`text-white lg:text-md text-[13px] font-primary font-bold py-2`}
      >
        {title}
      </p>
      <div className="grid gap-2 justify-between">
        <p className="text-sm flex items-center gap-2 font-primary text-white">
          <CiCalendarDate className="text-xl" />{" "}
          {release_date?.split("-").reverse().join("/")}
        </p>
        <p className="text-sm font-primary text-white">
          <span className="flex gap-2 items-center py-1">
            Tmdb: <FaStar className="text-yellow-400 text-sm" />{" "}
            {Number(vote_average).toFixed(1)}
          </span>
        </p>
      </div>
    </Link>
  );
};
export default MovieCard;
