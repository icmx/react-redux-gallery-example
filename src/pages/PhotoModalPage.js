import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Link,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';
import { selectPhoto } from '../actions/albumActions';

import Photo from '../components/Photo';

import './PhotoModalPage.css';

const mapStateToProps = (state) => {
  return {
    // loading: state.album.loading,
    error: state.photo.error,
    photos: state.album.photos,
    selectedPhoto: state.album.selectedPhoto,
  };
};

const PhotoModalPage = ({
  dispatch,
  // loading,
  error,
  photos,
  selectedPhoto,
}) => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const backgroundLocation = location?.state?.background;

  const goBack = () => {
    history.push({ pathname: `/albums/${selectedPhoto.albumId}` });
  };

  const goTo = (pathname) => {
    history.push({
      pathname,
      state: { background: backgroundLocation },
    });
  };

  const renderPage = () => {
    if (!selectedPhoto) {
      return (
        <div className="PhotoModal">
          <p className="placeholder">Loading photo...</p>
        </div>
      );

    }

    if (error) {
      return (
        <div className="PhotoModal">
          <p className="placeholder">
            Unable to display photo, please try to refresh.
          </p>
        </div>
      );

    }

    return (
      <div className="PhotoModal">
        <div className="PhotoModal__content">
          <Photo src={selectedPhoto.url} alt={selectedPhoto.title} />
        </div>
        <p>{selectedPhoto.title}</p>
        <p>
          <Link
            className="link"
            to={`/albums/${selectedPhoto.albumId}`}
          >
            Back to album
          </Link>
        </p>
        <button
          className="PhotoModal__button PhotoModal__button--top"
          onClick={() => {
            goBack();
          }}
        >
          ❌
        </button>
        <button
          className="PhotoModal__button PhotoModal__button--left"
          onClick={() => {
            goTo(`/photos/${selectedPhoto.previousId}`);
          }}
        >
          👈
        </button>
        <button
          className="PhotoModal__button PhotoModal__button--right"
          onClick={() => {
            goTo(`/photos/${selectedPhoto.nextId}`);
          }}
        >
          👉
        </button>
      </div>
    );
  };

  useEffect(() => {
    dispatch(selectPhoto(Number.parseInt(id, 10)));
  }, [dispatch, id, photos]);

  return (
    <section
      className="PhotoModal__backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) goBack();
      }}
    >
      {renderPage()}
    </section>
  );
};

export default connect(mapStateToProps)(PhotoModalPage);
