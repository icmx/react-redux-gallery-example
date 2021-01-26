import React from 'react';
import { useEffect, useState } from 'react';

import './Photo.css';

const Photo = ({ src, alt }) => {
  let [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [src]);

  return (
    <div className="Photo">
      <img
        src={src}
        alt={alt}
        hidden={imgLoaded === false}
        onLoad={() => setImgLoaded(true)}
      />
      <div hidden={imgLoaded === true}>🖼️</div>
    </div>
  );
};

export default Photo;
