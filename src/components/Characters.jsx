import { useState, useEffect } from "react";

import "../styles/components/Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Characters">
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
        </article>
      ))}
    </div>
  );
};

export default Characters;
