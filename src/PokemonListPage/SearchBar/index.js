import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const LightTextField = styled(TextField)({
  background: "#fff",
  color: "#000",
});

function SearchBar({ search, setSearch }) {
  const handleSearch = (target) => {
    setSearch(target.value);
    localStorage.setItem("search", target.value);
  };
  return (
    <LightTextField
      className="search"
      value={search}
      autoFocus={true}
      onChange={({ target }) => handleSearch(target)}
      label="Search"
      variant="filled"
      margin="normal"
      fullWidth
      id="search"
      placeholder={"Search for a pokemon..."}
    />
  );
}

export default SearchBar;
