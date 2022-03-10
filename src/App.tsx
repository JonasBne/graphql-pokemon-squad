import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyle";
import { PokemonLogo } from "./components/Logo";
import { PokemonList } from "./views/PokemonList/PokemonList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PokemonLogo />
      <PokemonList />
    </ThemeProvider>
  );
}

export default App;
