const Character = ({ character, addToFavorites }) => {
  return (
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
  );
};

export default Character;
