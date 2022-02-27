import React from "react";
import usePokemon from "../../common/hooks/usePokemon";

export default function PokemonDetails() {
  const pokemon = usePokemon();
  console.log(pokemon);
  return <div>PokemonDetails</div>;
}
