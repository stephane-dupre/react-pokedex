import { Grid } from "@mui/material";
import React from "react";
import usePokemons from "../../common/hooks/usePokemons";
import PokemonCard from "../PokemonCard";

export default function PokemonList() {
  const pokemons = usePokemons();
  console.log(pokemons);
  return (
    <Grid
      container
      spacing={{ xs: 1 }}
      columns={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }}
    >
      {pokemons.map((pokemon) => (
        <Grid item xs={1}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}
