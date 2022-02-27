import styled from "@emotion/styled";
import React from "react";

const Type = styled("div")({
  padding: "0.25rem 0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1",
  border: "1px solid black",
  borderRadius: "0.25rem",
});

export default function PokemonType({ type }) {
  return <Type>{type}</Type>;
}
