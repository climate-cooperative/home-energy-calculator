import { combineReducers } from 'redux';
import formdataReducer from './formdatareducer';

const rootReducer = combineReducers({
  formdatacontext: formdataReducer
});

export default rootReducer;
