module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
  env: {
    tmdb_base_url: "https://api.themoviedb.org/3/movie",
    tmdb_search_url: "https://api.themoviedb.org/3/search/movie",
    tmdb_image_url: "https://image.tmdb.org/t/p/original",
    tmdb_genres_url: "https://api.themoviedb.org/3/discover/movie",
    tmdb_api_key: "9afc4af278bdc393495ce804c04ab2b9",
  },
};

// URL PARA LISTAR ELEMENTO
// ${process.env.tmdb_base_url}/${id}?api_key=${process.env.tmdb_api_key}&language=pt-BR`
