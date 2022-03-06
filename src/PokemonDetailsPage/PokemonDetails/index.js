import { Box, styled, Typography } from "@mui/material";
import { useContext } from "react";
import usePokemon from "../../common/hooks/usePokemon";
import PokemonType from "../../common/PokemonType";
import { LangContext } from "../../App";

const Img = styled("div")(({image}) => ({
  flex: "15rem 0 1",
  border: "1px solid rgb(0,0,0,0.1)",
  background: `url(${image}) no-repeat center / contain`
}))

export default function PokemonDetails() {
  const {id, names, image, types, height, weight, moves} = usePokemon();
  const lang = useContext(LangContext);
  if (!id) return null;
  return (
    <>
    <Box sx={{
      display: "flex",
      gap: "1rem",
      marginBottom: "1rem",
      alignContent: "stretch"
    }}>
      <Img image={image} />
      <Box>
        <Typography gutterBottom variant="h4">{names[lang]}</Typography>
        <Box sx={{
          display: "flex",
          gap: ".5rem",
          marginBottom: "1rem"
        }}>{types.map((type) => <PokemonType key={type} type={type} />)}</Box>
        <Typography gutterBottom variant="body1">n°{id} <br /> Taille : {height}ft <br /> Poids : {weight}kg</Typography>
      </Box>
    </Box>

    <Box sx={{
      padding: "1rem",
      backgroundColor: "rgb(0,0,0,0.1)"
    }}>
      <Typography gutterBottom variant="h6" component="body1">Moveset</Typography>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem 1rem",
      }}>{moves.map((move) => <div key={move}>{move}</div>)}</Box>
    </Box>
    </>
  );
}
