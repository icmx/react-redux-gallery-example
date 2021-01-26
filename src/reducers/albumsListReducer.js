import * as actions from '../actions/albumsListActions';

const initial = { loading: true, error: false };

const albumsListReducer = (state = initial, action) => {
  switch (action.type) {
    case actions.GET_ALBUMS:
      return { ...state, loading: true, error: false };
    case actions.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: false,
      };
    case actions.GET_ALBUMS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default albumsListReducer;
