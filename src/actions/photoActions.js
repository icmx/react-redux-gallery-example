import api from '../api';

export const GET_PHOTO = 'GET_PHOTO';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_PHOTO_FAILURE = 'GET_PHOTO_FAILURE';

export const getPhoto = () => ({
  type: GET_PHOTO,
});

export const getPhotoSuccess = (photo) => ({
  type: GET_PHOTO_SUCCESS,
  payload: photo,
});

export const getPhotoFailure = () => ({
  type: GET_PHOTO_FAILURE,
});

export const fetchPhoto = (photoId) => async (dispatch) => {
  dispatch(getPhoto());

  try {
    const result = await api.get(`/photos/${photoId}`);

    dispatch(getPhotoSuccess(result.data));
  } catch (error) {
    dispatch(getPhotoFailure());
  }
};
