/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import './Photo.scss';

export const Photo = ({ src, name, author }) => (
  <div className="photo">
    <img
      className="photo__img"
      src={src}
      alt={name}
    />
    <p className="photo__title">{name}</p>
    <div className="photo__info">
      <h2 className="photo__author">{author}</h2>
      <p className="photo__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Cum suscipit eligendi id possimus natus vero, esse aliquam qui
        itaque consequuntur molestias soluta praesentium nisi.
        Modi officia optio est nostrum iure.
      </p>
      <form
        className="form contacts__form"
        action="https://www.facebook.com/profile.php?id=100017422386064/"
        method="POST"
      >
        <label>
          <input
            className="input form__input"
            type="text"
            name="nameContacts"
            placeholder="Name"
            pattern="[A-Za-z]{3}"
            required
          />
        </label>
        <label>
          <input
            className="input form__input"
            type="text"
            name="emailContacts"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <label>
          <textarea
            className="input form__input"
            name="message"
            placeholder="Message"
            required
          />
        </label>
        <button className="button form__button" type="submit">
          Write to the author
        </button>
      </form>
    </div>
  </div>
);

Photo.propTypes = {
  src: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};
