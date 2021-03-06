import api from '../api';

export const GET_ALBUM = 'GET_ALBUM';
export const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
export const GET_ALBUM_FAILURE = 'GET_ALBUM_FAILURE';
export const SELECT_PHOTO = 'SELECT_PHOTO';

export const getAlbum = () => ({
  type: GET_ALBUM,
});

export const getAlbumSuccess = (album) => ({
  type: GET_ALBUM_SUCCESS,
  payload: album,
});

export const getAlbumFailure = () => ({
  type: GET_ALBUM_FAILURE,
});

export const fetchAlbum = (albumId) => async (dispatch) => {
  dispatch(getAlbum());

  try {
    const result = await api.get(
      `/albums/${albumId}?_expand=user&_embed=photos`
    );

    dispatch(getAlbumSuccess(result.data));
  } catch (error) {
    dispatch(getAlbumFailure());
  }
};

export const selectPhoto = (photoId) => ({
  type: SELECT_PHOTO,
  payload: photoId,
});
