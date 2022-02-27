import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const { pokemonId } = useParams();
  useEffect(async () => {
    try {
      const response = await fetch(
        "https://pokedex-jgabriele.vercel.app/pokemons.json"
      );
      const pokemons = await response.json();
      const selectedPokemon = await pokemons.filter(
        ({ id }) => id === parseInt(pokemonId)
      );
      if (selectedPokemon.length < 1) throw new Error("Id incorrecte");
      setPokemon(selectedPokemon);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return pokemon;
}
