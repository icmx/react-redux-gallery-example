import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Photo from './Photo';

import './PhotoCard.css';

const PhotoCard = ({ photo }) => {
  const location = useLocation();

  return (
    <Link
      className="PhotoCard"
      to={{
        pathname: `/photos/${photo.id}`,
        state: { background: location },
      }}
    >
      <Photo src={photo.thumbnailUrl} alt={photo.title} />
      <div className="PhotoCard__backdrop">{photo.title} </div>
    </Link>
  );
};

export default PhotoCard;
