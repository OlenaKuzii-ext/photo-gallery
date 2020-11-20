/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import { Photo } from '../Photo/Photo';
import { PhotosList } from '../PhotosList/PhotosList';

export default class PhotosPage extends React.Component {
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

    return (
      <>
        <PhotosList
          photos={this.props.photos}
          onClick={this.onClick}
        />
        <Photo
          src={photoSrc}
          author={photoAuthor}
          name={photoName}
        />
      </>
    );
  }
}

PhotosPage.propTypes = {
  photos: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  })).isRequired,
};
