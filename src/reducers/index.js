import { combineReducers } from 'redux';
import topClassReducer from './topClassReducer';

const allReducers = combineReducers({
  topClass: topClassReducer
});

export default allReducers;
