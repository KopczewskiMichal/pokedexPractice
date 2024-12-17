"use client";
import SinglePokemonDetails from "./../../components/SinglePokemonDetail" 
import { useState, useEffect } from "react";



export default function Pokemon({params}) {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const {id } = params;
    console.log(id);
    
    async function fetchPokemonDetails(pokemonName) {
        // setIsLoading(true);
        try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            const data = await response.json();
            setSelectedPokemon(data); // Ustawienie stanu
          } catch (error) {
            console.error("Error fetching Pokémon details:", error);
          }
        }
  return (
    <div className="body">
      <div className="main">
        <h2>Wybrany pokemon: {id}</h2>
        
        {/* {isLoading && <Loader />} */}
        (
        <SinglePokemonDetails  tails data={fetchPokemonDetails(selectedPokemon)} />)
      </div>
    </div>
  );
}