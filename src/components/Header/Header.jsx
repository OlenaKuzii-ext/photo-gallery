import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => (
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
    <Link className="galery__link" to="/photos">
      <h1 className="galery__heading">Galery</h1>
    </Link>
  </div>
);
