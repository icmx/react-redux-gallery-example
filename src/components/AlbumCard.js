import React from 'react';
import { Link } from 'react-router-dom';

import './AlbumCard.css';

const AlbumCard = ({ album }) => (
  <Link className="AlbumCard" to={`/albums/${album.id}`}>
    <h2>{album.title}</h2>
    <hr />
    <p>Album by @{album.user.username}</p>
  </Link>
);

export default AlbumCard;
