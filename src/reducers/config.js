import * as types from '../actions/types';

const initial = {
  loaded: false
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.CONFIG_LOADED:
      return {
        ...state,
        loaded: true,
        ...action.config
      };

    default:
      return state;
  }
}

export default reducer;