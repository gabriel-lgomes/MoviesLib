"use client";

import React, { FC } from "react";
import useMovies from "../hooks/useMovies";
import MovieCard from "../components/movieCard";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "./loading";

interface MoviesListProps {
  urlAPI: string;
  urlPath: string;
}

const MoviesList: FC<MoviesListProps> = ({ urlAPI, urlPath }) => {
  const { data, loading } = useMovies(
    `${urlAPI}api_key=${process.env.tmdb_api_key}&language=pt-BR`
  );

  return (
    <>
      {data && (
        <>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={2}
            navigation
            pagination
            breakpoints={{
              768: {
                slidesPerView: 6,
              },
              1500: {
                slidesPerView: 8,
              },
            }}
          >
            {data?.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movies={movie} urlPath={urlPath} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      {loading && <Loading loading={loading} />}
    </>
  );
};

export default MoviesList;
