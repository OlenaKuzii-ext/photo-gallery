import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Photos.scss';

export const Photos = ({ id, downloadUrl, name, author, onClick }) => (
  <li key={id} className="photos__item">
    <img
      className="photos__img"
      src={downloadUrl}
      alt={name}
    />
    <p className="photos__title">{author}</p>
    <div className="photos__like">
      <p className="photos__like-counter">
        {' '}
        Likes:
        {id}
      </p>
    </div>
    <Link to="/photo">
      <button
        type="button"
        className="photos__button photos__button-open"
        onClick={onClick}
      >
        Open
      </button>
    </Link>

  </li>
);

Photos.propTypes = {
  id: propTypes.number.isRequired,
  downloadUrl: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
