import React, { FC } from "react";
import Button from "./ui/button";
import { FaPlay, FaStar } from "react-icons/fa";
import { Genres } from "../types/genres.interface";
interface BannerProps {
  subtitle: string;
  title: string;
  description: string;
  background: string;
  vote_average?: string;
  genres?: Array<Genres>;
}

const Banner: FC<BannerProps> = ({
  subtitle,
  title,
  description,
  background,
  vote_average,
  genres,
}) => {
  function limitCharacters(text: string, limit: number) {
    return text.slice(0, limit) + "...";
  }

  return (
    <div className="relative md:top-[-115px] lg:top-[-115px] top-0 h-[600px] flex flex-row items-center">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-primary-banner bg-cover bg-center bg-fixed w-full h-full absolute"
      ></div>
      <div className="w-full h-full absolute bg-gradient-to-r -from--darkbg to-gradient-1 via-gradient-2 to-gradient-3"></div>
      <div className="container mx-auto relative px-6 lg:px-1">
        <h2 className="font-secundary font-bold text-3xl text-white leading-none uppercase">
          {subtitle}
        </h2>
        <h1 className="font-secundary font-bold text-7xl leading-none uppercase from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="max-w-[500px] leading-5 pt-4 pb-2">
          <p className="font-primary text-white text-sm ">
            {limitCharacters(description, 500)}
          </p>
        </div>

        {vote_average !== undefined ? (
          <p className="text-sm font-primary text-white pb-3">
            <span className="flex gap-2 items-center py-1">
              Tmdb: <FaStar className="text-yellow-400 text-sm" />{" "}
              {Number(vote_average).toFixed(1)}
            </span>
          </p>
        ) : (
          ""
        )}

        {genres && (
          <div className="flex gap-4 pb-6">
            {genres.map((genre) => (
              <Button
                className="rounded text-[0.8rem] capitalize border-opacity-40 h-auto max-w-max py-1 px-4"
                key={genre.id}
                type="secondary"
                href=""
              >
                {genre.name}
              </Button>
            ))}
          </div>
        )}

        <Button type="primary" href="/">
          <FaPlay /> Trailer
        </Button>
      </div>
    </div>
  );
};

export default Banner;
