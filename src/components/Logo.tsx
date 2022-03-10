import React from "react";
import styled from "styled-components";

const Image = styled.img({
  width: "300px",
  margin: "30px auto",
  display: "block",
});

export function PokemonLogo() {
  return (
    <Image
      src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo-700x394.png"
      alt="pokemon-logo"
    />
  );
}
