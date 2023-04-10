interface ProcessEnv {
  [key: string]: string
}

declare const process: {
  env: ProcessEnv
};

export const environment = {
  baseUrl: 'https://api.themoviedb.org/3',
  production: false,
  movieApiKey: process.env.MOVIE_API_KEY,
  images: 'https://image.tmdb.org/t/p'
};
