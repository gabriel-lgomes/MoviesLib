import { FC } from "react";
import Banner from "../../components/banner";
import Header from "../../components/header";
import MoviesList from "../../components/moviesList";
import Title from "../../components/title";

const Home: FC = () => {
  return (
    <main>
      <Header />
      <section className="max-h-[540px]">
        <Banner
          subtitle="Filmes online"
          title="The Flash"
          description="Quando Barry usa seus superpoderes para viajar no tempo e mudar os eventos do passado. Mas quando tenta salvar sua família e acaba, sem querer, alterando o futuro, Barry fica preso em uma realidade na qual o General Zod está de volta, ameaçando colocar o mundo em risco, e não há super-heróis a quem recorrer."
          background="https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg"
        />
      </section>
      <section className="max-h-[600px]">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="pb-6">
            <Title>Filmes - Populares</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_base_url}/popular?`}
            />
          </div>
          <div className="pb-6">
            <Title>Filmes - Ficção Centífica</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=28&`}
            />
          </div>
          <div className="pb-6">
            <Title>Filmes - Romance</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=10749&`}
            />
          </div>
          <div className="pb-6">
            <Title>Filmes - Terror</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=27&`}
            />
          </div>
          <div className="pb-6">
            <Title>Filmes - Comédia</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=35&`}
            />
          </div>
          <div className="pb-6">
            <Title>Filmes - Ação</Title>
            <MoviesList
              urlPath="movies"
              urlAPI={`${process.env.tmdb_genres_url}/?page=1&with_genres=28&`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
