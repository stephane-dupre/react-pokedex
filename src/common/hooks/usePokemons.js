import { useEffect, useState } from "react";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("/pokemons.json");
        const pokemonsJson = await response.json();
        setPokemons(pokemonsJson);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPokemons();
  }, []);

  return pokemons;
}
