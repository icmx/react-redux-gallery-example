import * as actions from '../actions/albumActions';

const initial = { loading: true, error: false };

const albumReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.GET_ALBUM:
      return { ...state, loading: true };

    case actions.GET_ALBUM_SUCCESS:
      let title = action.payload.title;
      let photos = action.payload.photos;
      let user = action.payload.user;

      photos = photos.map((photo, index) => {
        photo.previousId = index > 0 ? photos[index - 1].id : undefined;
        photo.nextId =
          index < photos.length - 1 ? photos[index + 1].id : undefined;

        return photo;
      });

      return {
        ...state,
        title,
        photos,
        user,
        loading: false,
        error: false,
      };

    case actions.GET_ALBUM_FAILURE:
      return { ...state, loading: false, error: true };

    case actions.SELECT_PHOTO:
      const selectedPhoto = state.photos
        ? state.photos.find((photo) => photo.id === action.payload)
        : undefined;

      return { ...state, selectedPhoto };

    default:
      return state;
  }
};

export default albumReducer;
