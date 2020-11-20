/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import { Photos } from '../Photos/Photos';

export const PhotosList = ({ photos, onClick }) => (
  <ul className="photos">
    {photos.map(({ id, download_url, name, author }) => (
      <Photos
        id={id}
        downloadUrl={download_url}
        name={name}
        author={author}
        onClick={() => onClick(download_url, author, name)}
      />
    ))}
  </ul>
);

PhotosList.propTypes = {
  photos: propTypes.arrayOf.isRequired,
  onClick: propTypes.func.isRequired,
};
