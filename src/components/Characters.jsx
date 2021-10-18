import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useFavoriteContext } from "../context/providers/FavoriteContext";

import "../styles/components/Characters.css";
import Search from "./Search";

const API = "https://rickandmortyapi.com/api/character/";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addToFavorites } = useFavoriteContext();
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredCharacters = useMemo(() => {
    return characters.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [characters, search]);

  const handleSearch = useCallback(() => {
    return setSearch(searchInput.current.value);
  }, []);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Characters">
      <div className="Characters-favorites">
        {favorites.length > 0 && (
          <>
            <h2>Favorites:</h2>
            <ul>
              {favorites.map((favorite) => (
                <li key={favorite.id}>{favorite.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <div className="Characters-container">
        {filteredCharacters.map((character) => (
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
              onClick={() => addToFavorites(character)}
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
