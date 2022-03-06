import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PokemonListPage from "./PokemonListPage";
import PokemonDetailsPage from "./PokemonDetailsPage";
import { createContext, useState } from "react";

export const LangContext = createContext("fr");

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");
  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#0A1929",
        }}
      >
        <Header lang={lang} setLang={setLang} />
        <LangContext.Provider value={lang}>
          <Routes>
            <Route path="/pokemons" element={<PokemonListPage />}>
              <Route
                path="/pokemons/:pokemonId"
                element={<PokemonDetailsPage />}
              />
            </Route>
          </Routes>
        </LangContext.Provider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
