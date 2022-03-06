import { Box } from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import { Outlet } from "react-router-dom";

export default function PokemonListPage() {
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  return (
    <Box p={1}>
      <SearchBar search={search} setSearch={setSearch} />
      <PokemonList search={search} />
      <Outlet />
    </Box>
  );
}
