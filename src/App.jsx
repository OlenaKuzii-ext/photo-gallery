/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { getLength, getPhotos } from './api/photos';
import Photos from './components/PhotosPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

class App extends React.Component {
  state = {
    photos: [],
    pageSize: 4,
    totalUsersCount: null,
    currentPage: 1,
    query: '',
  }

  componentDidMount() {
    getLength()
      .then((arr) => {
        this.setState({ totalUsersCount: arr.length });
      });
  }

  onClick(page) {
    this.setState({
      currentPage: page,
    });
    this.loadPage();
  }

  loadPage = async() => {
    const photos = await getPhotos(this.state.currentPage, this.state.pageSize);

    this.setState({ photos });
  }

  render() {
    const {
      photos,
      pageSize,
      totalUsersCount,
      currentPage,
      query,
    } = this.state;
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    console.log(query);

    const filteredPhotos = photos.filter(({ author }) => (
      author.toLowerCase().includes(query.toLowerCase())
    ));

    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        {filteredPhotos.length === 0 ? (
          <Header
            onClick={this.loadPage}
          />
        ) : (
          <div className="galery">
            <h1 className="galery__heading">Galery</h1>
            <div className="galery__search">
              <p className="galery__search-text">Find the author</p>
              <input
                type="text"
                id="search-query"
                className="galery__input"
                placeholder="Type search author"
                name="search"
                value={query}
                onChange={(event) => {
                  this.setState({
                    query: event.target.value,
                  });
                }}
              />
            </div>
            <div className="galery__buttons">
              {pages.map(page => (
                <button
                  type="button"
                  className={(currentPage === page)
                    ? 'galery__selectedPage' : 'galery__button-page'}
                  onClick={() => this.onClick(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <Photos photos={filteredPhotos} />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
