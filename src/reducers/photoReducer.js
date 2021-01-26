import * as actions from '../actions/photoActions';

const initial = { loading: true, error: false };

const photoReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.GET_PHOTO:
      return { ...state, loading: true };
    case actions.GET_PHOTO_SUCCESS:
      return {
        albumId: action.payload.albumId,
        title: action.payload.title,
        url: action.payload.url,
        thumbnailUrl: action.payload.thumbnailUrl,
        loading: false,
        error: false,
      };
    case actions.GET_PHOTO_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default photoReducer;
