function PokemonList({ data, onPokemonClick }) {
  return (
    <div className="pokemon-list">
      {data.map((pokemon) => (
        <button
          key={pokemon.id}
          className="pokemon-item"
          onClick={() => onPokemonClick(pokemon.name)}
        >
          <h3>{pokemon.name}</h3>
          <p>Number in the pokedex: {pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </button>
      ))}
    </div>
  );
}

export default PokemonList;
