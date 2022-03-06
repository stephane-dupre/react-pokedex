import styled from "@emotion/styled";
import TYPES from "./TYPES";

const Type = styled("div")(({ type }) => ({
  width: "fit-content",
  padding: "0.25rem 0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1",
  border: "1px solid black",
  borderRadius: "0.25rem",
  backgroundColor: TYPES[type],
}));

export default function PokemonType({ type }) {
  return <Type type={type}>{type}</Type>;
}
