import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";

export default function PokemonDetailsPage() {
  const navigate = useNavigate();
  return (
    <Dialog
      open={true}
      onBackdropClick={() => {
        navigate("/pokemons");
      }}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <Box p={1}>
        <PokemonDetails />
      </Box>
    </Dialog>
  );
}
