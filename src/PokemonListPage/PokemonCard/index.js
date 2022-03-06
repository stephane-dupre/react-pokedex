import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import PokemonType from "../../common/PokemonType";

const Pokemon = styled(Card)({
  display: "grid",
  justifyItems: "center",
  padding: "0.5rem 0.5rem 1.5rem",

  ".num": {
    justifySelf: "left",
    fontSize: "0.75rem",
  },

  ".title": {
    fontSize: "1.75rem",
  },

  ".types": {
    display: "flex",
    gap: "0.5rem",
  },
});

export default function PokemonCard({ pokemon }) {
  const { id, name, image, types } = pokemon;
  return (
    <Pokemon>
      <Typography variant="body2" gutterBottom className="num">
        No.{id}
      </Typography>
      <Typography variant="h4" component={"h3"} className="title">
        {name}
      </Typography>
      <img src={image} alt={name} />
      <div className="types">
        {types.map((type) => (
          <PokemonType key={type} type={type} />
        ))}
      </div>
    </Pokemon>
  );
}
