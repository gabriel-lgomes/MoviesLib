"use client";

import { FC } from "react";
import Banner from "../../../../../components/banner";
import Header from "../../../../../components/header";
import { useParams } from "next/navigation";
import useMovies from "../../../../../hooks/useMovies";
import Loading from "../../../../../components/loading";
import MoviesList from "../../../../../components/moviesList";
import Title from "../../../../../components/title";

const Movies: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useMovies(
    `${process.env.tmdb_base_url}/${id}?api_key=${process.env.tmdb_api_key}&language=pt-BR`
  );

  console.log(data);
  return (
    <main className="bg-black h-full font-primary">
      <Header />
      {data && (
        <>
          <section className="max-h-[540px]">
            <Banner
              subtitle={data.title}
              title={data.title}
              description={data.overview}
              background={`${process.env.tmdb_image_url}/${data.backdrop_path}`}
              vote_average={data.vote_average}
              genres={data.genres}
            />
          </section>

          <div className="container mx-auto">
            <Title>Filmes Relacionados</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=28&`}
            />
          </div>
        </>
      )}
      {loading && <Loading loading={loading} />}
    </main>
  );
};

export default Movies;
