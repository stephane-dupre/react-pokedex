import { MenuItem, Select } from "@mui/material";

function LanguageSelection({ lang, setLang }) {
  const langages = [
    "zh-Hans",
    "ja",
    "en",
    "it",
    "es",
    "de",
    "fr",
    "zh-Hant",
    "ko",
    "roomaji",
    "ja-Hrkt",
  ];

  const handleSelect = (e) => {
    setLang(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <Select
      style={{ background: "#fff" }}
      onChange={(e) => handleSelect(e)}
      name="lang"
      id="lang"
      value={lang}
    >
      {langages.map((langage) => (
        <MenuItem key={langage} value={langage}>
          {langage}
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguageSelection;
