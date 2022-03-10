import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/globalStyle";
import { PokemonLogo } from "./components/Logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PokemonLogo />
    </ThemeProvider>
  );
}

export default App;
