import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PokemonListPage from "./PokemonListPage";
import PokemonDetailsPage from "./PokemonDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#0A1929",
        }}
      >
        <Header />
        <Routes>
          <Route path="/pokemons" element={<PokemonListPage />} />
          <Route path="/pokemons/:pokemonId" element={<PokemonDetailsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
