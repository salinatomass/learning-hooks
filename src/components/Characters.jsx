import { useState, useMemo, useRef, useCallback } from "react";
import { useFavoriteContext } from "../context/providers/FavoriteContext";
import useCharacters from "../hooks/useCharacters";

import "../styles/components/Characters.css";
import Character from "./Character";
import Search from "./Search";

const API = "https://rickandmortyapi.com/api/character/";

const Characters = () => {
  const characters = useCharacters(API);
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
          <Character character={character} addToFavorites={addToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
