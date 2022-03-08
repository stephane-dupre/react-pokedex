import styled from "@emotion/styled";
import useType from "../hooks/useTypes";
import TYPES from "./TYPES";
import { useContext } from "react";
import { LangContext } from "../../App";

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
  const lang = useContext(LangContext);
  const trad = useType(type, lang);
  return <Type type={type}>{trad}</Type>;
}
