/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { getLength, getPhotos } from './api/photos';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Galery from './components/Galery/Galery';

class App extends React.Component {
  state = {
    photos: [],
    pageSize: 4,
    totalPhotosCount: null,
    currentPage: 1,
    query: '',
  }

  componentDidMount() {
    getLength()
      .then((arr) => {
        this.setState({ totalPhotosCount: arr.length });
      });
    this.loadPage();
  }

  onClick = (page) => {
    this.setState({
      currentPage: page,
    });
    this.loadPage(page);
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  loadPage = async(page) => {
    const photos = await getPhotos(page, this.state.pageSize);

    this.setState({ photos });
  }

  render() {
    const {
      photos,
      pageSize,
      totalPhotosCount,
      currentPage,
      query,
    } = this.state;
    const pagesCount = Math.ceil(totalPhotosCount / pageSize);
    const pages = [];

    const filteredPhotos = photos.filter(({ author }) => (
      author.toLowerCase().includes(query.toLowerCase())
    ));

    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="">
            <Galery
              pages={pages}
              currentPage={currentPage}
              query={query}
              filteredPhotos={filteredPhotos}
              onClick={this.onClick}
              onChange={this.onChange}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
