import http from '../utils/https';
import {OMDB_BASE_URL, OMDB_KEY} from '@env';

// const urlSearch = `${OMDB_BASE_URL}`;
const urlGetMovie = `${OMDB_BASE_URL}?plot=full&y=2023`;

export const searchMovies = async params => {
  return http('GET', '', params);
};

export const getMovie = async id => {
  return http('GET', `?apikey=${OMDB_KEY}&plot=full&i=${id}`, '');
};
