import api from '../api';

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE';

export const getAlbums = () => ({
  type: GET_ALBUMS,
});

export const getAlbumsSuccess = (albums) => ({
  type: GET_ALBUMS_SUCCESS,
  payload: albums,
});

export const getAlbumsFailure = () => ({
  type: GET_ALBUMS_FAILURE,
});

export const fetchAlbums = () => async (dispatch) => {
  dispatch(getAlbums());

  try {
    const result = await api.get(`/albums?_expand=user`);

    dispatch(getAlbumsSuccess(result.data));
  } catch (error) {
    dispatch(getAlbumsFailure());
  }
};
