/* eslint-disable no-console */
import { request } from './helpers';

export const getLength = () => request('');

export const getPhotos = (page, limit) => (
  request(`?page=${page}&limit=${limit}`)
);
