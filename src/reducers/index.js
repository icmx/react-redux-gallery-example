import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import albumsListReducer from './albumsListReducer';
import photoReducer from './photoReducer';

const rootReducer = combineReducers({
  albums: albumsListReducer,
  album: albumReducer,
  photo: photoReducer,
});

export default rootReducer;
