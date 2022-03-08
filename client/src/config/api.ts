import axios from 'axios';
const url = 'https://api.themoviedb.org/3';
export const apiKey = 'cb76725f42777983c8a26f9454dd0945';

export const $api = axios.create({
  baseURL: `${url}/trending/all/day?api_key=${apiKey}&`
});