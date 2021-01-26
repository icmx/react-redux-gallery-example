import React from 'react';

import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/albumsListActions';

import AlbumCard from '../components/AlbumCard';

import './HomePage.css';

const mapStateToProps = (state) => {
  return {
    loading: state.albums.loading,
    error: state.albums.error,
    albums: state.albums.items,
  };
};

const HomePage = ({ dispatch, loading, error, albums }) => {
  const renderPage = () => {
    if (loading) {
      return (
        <>
          <h1>Loading...</h1>
          <div className="flex g1 c1">
            <section className="item">
              <p className="placeholder">
                Loading albums, please wait...
              </p>
            </section>
          </div>
        </>
      );
    }

    if (error) {
      return (
        <>
          <h1>Error!</h1>
          <div className="flex g1 c1">
            <section className="item">
              <p className="placeholder">
                Unable to display albums, please try to refresh.
              </p>
            </section>
          </div>
        </>
      );
    }

    return (
      <>
        <h1>Hello, World!</h1>
        <p>
          This is an example gallery application made with{' '}
          <strong>React</strong> and <strong>Redux</strong>. Items below
          are randomly generated albums, you can click on one to see
          placeholder photos in it.
        </p>
        <p>
          Data is taken from{' '}
          <a className="link" href="https://jsonplaceholder.typicode.com/">
            JSONPlaceholder
          </a>{' '}
          API:
        </p>
        <ul>
          <li><a className="link" href="https://jsonplaceholder.typicode.com/albums">/albums</a> (100 items)</li>
          <li><a className="link" href="https://jsonplaceholder.typicode.com/photos">/photos</a> (1000 items)</li>
          <li><a className="link" href="https://jsonplaceholder.typicode.com/users">/users</a> (10 items)</li>
        </ul>
        <div className="flex g1 c1 c2@d">
          {albums.map((album) => (
            <section className="item" key={album.id}>
              <AlbumCard album={album} />
            </section>
          ))}
        </div>
      </>
    );
  };

  React.useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return <section className="HomePage">{renderPage()}</section>;
};

export default connect(mapStateToProps)(HomePage);
