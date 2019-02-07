import * as types from '../actions/types';

const initial = {
  loaded: false,
  list: [],
  selected: []
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.GENRES_LOADED:
      return {
        ...state,
        loaded: true,
        list: action.list
      };

    case types.FILTER_GENRES:
      return {
          ...state,
          selected: action.value
              ? [...state.selected, action.id]
              : state.selected.filter(item => item !== action.id)
      };

    default:
      return state;
  }
}

export default reducer;