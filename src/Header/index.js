import { Box } from "@mui/system";
import React from "react";
import Logo from "./Logo";
import LanguageSelection from "./LanguageSelection";

export default function Header({ lang, setLang }) {
  return (
    <Box
      p={1}
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <LanguageSelection lang={lang} setLang={setLang} />
    </Box>
  );
}
