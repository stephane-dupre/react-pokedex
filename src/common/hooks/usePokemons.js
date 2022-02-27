import { useEffect, useState } from "react";

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch(
        "https://pokedex-jgabriele.vercel.app/pokemons.json"
      );
      const json = await response.json();
      setPokemons(json);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return pokemons;
}
