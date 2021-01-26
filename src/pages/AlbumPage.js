import React from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchAlbum } from '../actions/albumActions';
import PhotoCard from '../components/PhotoCard';

import './AlbumPage.css';

const mapStateToProps = (state) => {
  return {
    loading: state.album.loading,
    error: state.album.error,
    title: state.album.title,
    photos: state.album.photos,
    user: state.album.user,
  };
};

const AlbumPage = ({
  dispatch,
  loading,
  error,
  title,
  photos,
  user,
}) => {
  let { id } = useParams();

  const loadContent = () => {
    if (loading) {
      return (
        <>
          <h1>Loading...</h1>
          <p>
            <Link className="link" to="/">
              Back
            </Link>
          </p>
          <div className="flex c1 g1">
            <section className="item c1">
              <p className="placeholder">
                Loading photos, please wait...
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
          <p>
            <Link className="link" to="/">
              Back
            </Link>
          </p>
          <div className="flex c1 g1">
            <section className="item c1">
              <p className="placeholder">
                Unable to display photos, please try to refresh.
              </p>
            </section>
          </div>
        </>
      );
    }

    return (
      <>
        <h1>{title}</h1>
        <p>Album by @{user.username}</p>
        <p>
          <Link className="link" to="/">
            Back
          </Link>
        </p>
        <div className="flex c4 g1">
          {photos.map((photo) => (
            <section className="item square" key={photo.id}>
              <PhotoCard photo={photo} />
            </section>
          ))}
        </div>
      </>
    );
  };

  React.useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [dispatch, id]);

  return <section className="AlbumPage">{loadContent()}</section>;
};

export default connect(mapStateToProps)(AlbumPage);
