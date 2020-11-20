/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import './Galery.scss';
import { Switch, Route } from 'react-router-dom';

import { Photo } from '../Photo/Photo';
import { PhotosList } from '../PhotosList/PhotosList';

export default class Galery extends React.Component {
  state = {
    photoSrc: '',
    photoAuthor: '',
    photoName: '',
  }

  onClick = (download_url, author, name) => {
    this.setState({
      photoSrc: download_url,
      photoAuthor: author,
      photoName: name,
    });
  }

  render() {
    const { photoSrc, photoAuthor, photoName } = this.state;
    const {
      pages,
      currentPage,
      query,
      filteredPhotos,
      onClick,
      onChange,
    } = this.props;

    return (
      <>
        <Switch>
          <Route path="/photos">
            <div className="galery">
              <div className="galery__search">
                <p className="galery__search-text">Find the author</p>
                <input
                  type="text"
                  id="search-query"
                  className="galery__input"
                  placeholder="Type search author"
                  name="search"
                  value={query}
                  onChange={onChange}
                />
              </div>
              <div className="galery__buttons">
                {pages.map(page => (
                  <button
                    key={page}
                    type="button"
                    className={(currentPage === page)
                      ? 'galery__selectedPage' : 'galery__button-page'}
                    onClick={() => onClick(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <PhotosList
              photos={filteredPhotos}
              onClick={this.onClick}
            />
          </Route>
          <Route path="/photo">
            <Photo
              src={photoSrc}
              author={photoAuthor}
              name={photoName}
            />
          </Route>
        </Switch>

      </>
    );
  }
}

Galery.propTypes = {
  filteredPhotos: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  })).isRequired,
  pages: propTypes.arrayOf.isRequired,
  currentPage: propTypes.number.isRequired,
  query: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};
