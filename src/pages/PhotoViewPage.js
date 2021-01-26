import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { fetchPhoto } from '../actions/photoActions';
import Photo from '../components/Photo';

import './PhotoViewPage.css';

const mapStateToProps = (state) => {
  return {
    loading: state.photo.loading,
    error: state.photo.error,
    albumId: state.photo.albumId,
    title: state.photo.title,
    url: state.photo.url,
    thumbnailUrl: state.photo.thumbnailUrl,
  };
};

const PhotoViewPage = ({
  dispatch,
  loading,
  error,
  albumId,
  title,
  url,
  thumbnailUrl,
}) => {
  const { id } = useParams();

  const renderPage = () => {
    if (loading) {
      return <p className="placeholder">Loading photo...</p>;
    }

    if (error) {
      return (
        <p className="placeholder">
          Unable to display photo, please try to refresh.
        </p>
      );
    }

    return (
      <>
        <div className="PhotoViewPage__content">
          <Photo src={url} alt={title} />
        </div>
        <p>{title}</p>
        <p>
          <Link className="link" to={`/albums/${albumId}`}>
            Back to album
          </Link>
        </p>
      </>
    );
  };

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  return <section className="PhotoViewPage">{renderPage()}</section>;
};

export default connect(mapStateToProps)(PhotoViewPage);
