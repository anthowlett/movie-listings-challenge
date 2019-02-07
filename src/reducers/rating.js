import * as types from '../actions/types';

const initial = {
  min_rating: 3
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.SET_MIN_RATING:
      return {
        ...state,
        min_rating: action.rating
      };

    default:
      return state;
  }
}

export default reducer;