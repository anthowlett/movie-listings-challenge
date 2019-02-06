import * as types from '../actions/types';

const initial = {
  loaded: false,
  list: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.GENRES_LOADED:
      return {
        ...state,
        loaded: true,
        list: action.list
      };

    default:
      return state;
  }
}

export default reducer;