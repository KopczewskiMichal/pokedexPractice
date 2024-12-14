const PokemonList = ({ data }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        })
      );
      setPokemonDetails(details);
    };

    fetchPokemonDetails();
  }, [data]);

  return (
    <div className="pokemon-list">
      {pokemonDetails.map((pokeData) => (
        <button key={pokeData.id} className="pokemon-item" data-name={pokeData.name}>
          <h3>{pokeData.name}</h3>
          <p>Number in the pokedex: {pokeData.id}</p>
          <img src={pokeData.sprites.front_default} alt={pokeData.name} />
        </button>
      ))}
    </div>
  );
};