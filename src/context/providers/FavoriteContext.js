import { createContext, useContext, useReducer } from "react";
import { favoriteReducer, intitialState } from "../reducers/favoriteReducer";
import { favoriteActions } from "../actions/favoriteActions";

const FavoriteContext = createContext(intitialState);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, intitialState);

  const addToFavorites = (favorite) =>
    dispatch({ type: favoriteActions.ADD_TO_FAVORITE, payload: favorite });

  return (
    <FavoriteContext.Provider value={{ ...state, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
