"use client";

import PokemonDetails from "../../components/PokemonDetails";
export default function Pokemon() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
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
        {/* <PokemonDe  tails data={selectedPokemon} />) */}
      </div>
    </div>
  );
}
