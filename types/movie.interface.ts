import { Genres } from "./genres.interface";

export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: string;
  release_date: string;
  overview: string;
  results: Array<Movie>;
  genres: Array<Genres>;
}
