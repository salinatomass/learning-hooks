import { useState, useEffect, useReducer } from "react";

import "../styles/components/Characters.css";

const intitialState = {
  favorites: [],
};

const favoriteActions = {
  ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
};

const favoriteReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case favoriteActions.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, intitialState);

  const handleClick = (favorite) => {
    dispatch({ type: favoriteActions.ADD_TO_FAVORITE, payload: favorite });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Characters">
      <div className="Characters-favorites">
        {state.favorites.length > 0 && (
          <>
            <h2>Favorites:</h2>
            <ul>
              {state.favorites.map((favorite) => (
                <li key={favorite.id}>favorite.name</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="Characters-container">
        {characters.map((character) => (
          <article className="Characters-item" key={character.id}>
            <figure className="Characters-image">
              <img src={character.image} alt={character.name} />
              <div className="Characters-description">
                <p>
                  <span>Status: </span>
                  {character.status}
                </p>
                <p>
                  <span>Gender: </span>
                  {character.gender}
                </p>
                <p>
                  <span>Specie: </span>
                  {character.species}
                </p>
                <p>
                  <span>Origin: </span>
                  {character.origin.name}
                </p>
              </div>
            </figure>
            <h3 className="Characters-name">{character.name}</h3>
            <button
              type="button"
              className="Characters-button"
              onClick={() => handleClick(character)}
            >
              Add to favorite
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Characters;
