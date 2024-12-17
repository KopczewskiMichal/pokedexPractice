import PokemonDetails from "../../components/PokemonDetails";

export default function Pokemon() {
  async function fetchPokemonDetails(pokemonName) {
    // setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      let selectedPokemon = data;
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    } finally {
      //   setIsLoading(false);
    }
  }

  return (
    <div className="body">
      <div className="main">
        {/* {isLoading && <Loader />} */}
        (
        <PokemonDetails data={selectedPokemon} />)
      </div>
    </div>
  );
}
