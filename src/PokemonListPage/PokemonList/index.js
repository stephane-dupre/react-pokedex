import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import usePokemons from "../../common/hooks/usePokemons";
import PokemonCard from "../PokemonCard";
import { useContext } from "react";
import { LangContext } from "../../App";

const LinkSimple = styled(Link)({
  textDecoration: "none",
});

export default function PokemonList({ search }) {
  const lang = useContext(LangContext);
  const pokemons = usePokemons();
  const filtered = pokemons.filter(({ names }) =>
    names[lang].toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Grid
      container
      spacing={{ xs: 1 }}
      columns={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8 }}
    >
      {filtered.map(({ id, names, image, types }) => {
        const name = names[lang];
        return (
          <Grid key={id} item xs={1}>
            <LinkSimple to={`${id}`}>
              <PokemonCard pokemon={{ id, name, image, types }} />
            </LinkSimple>
          </Grid>
        );
      })}
    </Grid>
  );
}
