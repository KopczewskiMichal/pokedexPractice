"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";
import Loader from "../components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  async function fetchPokemonList() {
    setIsLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

      const detailedPokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonDetailsResponse = await fetch(pokemon.url);
          return pokemonDetailsResponse.json();
        })
      );

      setPokemonList(detailedPokemonList);
      setSelectedPokemon(null);
    } catch (error) {
      console.error("Error fetching Pokémon list:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchPokemonDetails(pokemonName) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function returnHome() {
    fetchPokemonList();
  }

  function findPokemon(searchInput) {
    const pokemonName = searchInput.toLowerCase();
    if (pokemonName) {
      fetchPokemonDetails(pokemonName);
    }
  }

  return (
    <div className="body">
      <Header returnHome={returnHome} findPokemon={findPokemon} />
      <div className="main">
        {isLoading && <Loader />}
        {selectedPokemon ? (
          <PokemonDetails data={selectedPokemon} />
        ) : (
          <PokemonList
            data={pokemonList}
            onPokemonClick={fetchPokemonDetails}
          />
        )}
      </div>
    </div>
  );
}
