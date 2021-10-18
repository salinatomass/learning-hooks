import { favoriteActions } from "../actions/favoriteActions";

export const intitialState = {
  favorites: [],
};

export const favoriteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case favoriteActions.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.find((item) => item.id === payload.id)
          ? state.favorites
          : [...state.favorites, payload],
      };
    default:
      return state;
  }
};
