const PokemonDetails = ({ data }) => {
  const types = data.types.map((type) => type.type.name).join(", ");
  const stats = data.stats
    .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
    .join(", ");

  return (
    <div className="pokemon-details">
      <h2>{data.name}</h2>
      <p>Number in the pokedex: {data.id}</p>
      <p>Types: {types}</p>
      <p>Stats: {stats}</p>
      <p>Weight: {data.weight}</p>
      <p>Height: {data.height}</p>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};
