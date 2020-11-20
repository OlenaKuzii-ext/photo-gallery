import React from 'react';
import './Header.scss';
import propTypes from 'prop-types';

export const Header = ({ onClick }) => (
  <div className="header">
    <div className="header__contacts">
      <p className="header__text">
        Phone
        <br />
        <a href="tel:+380951102384" className="header__link">
          +380 95 110 23 84
        </a>
      </p>
      <p className="header__text">
        Email
        <br />
        <a href="mailto:okuziy@gmail.com" className="header__link">
          okuziy@gmail.com
        </a>
      </p>
    </div>
    <h1 className="header__heading">Galery</h1>
    <button
      type="button"
      className="header__button"
      onClick={onClick}
    >
      Show Photos
    </button>
  </div>
);

Header.propTypes = {
  onClick: propTypes.func.isRequired,
};
