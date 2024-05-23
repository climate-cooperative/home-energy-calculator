import { UPDATE } from '../actions/actions.js';

// Reducer function
const formdataReducer = (state = [], action) => {

  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default formdataReducer;


