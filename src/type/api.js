import {OMDB_BASE_URL} from '@env';
const urlSearch = `${OMDB_BASE_URL}?type=Imdb&skip=0&limit=50&lang=Cn&plot=full&s=love&y=2023`;
const urlGetMovie = `${OMDB_BASE_URL}?plot=full&y=2023`;
export const searchMovies = async () => {
  return fetch(urlSearch, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.warn(e));
};

export const getMovie = async id => {
  return fetch(urlGetMovie + '&i=' + id, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(json => json)
    .catch(e => console.warn(e));
};
