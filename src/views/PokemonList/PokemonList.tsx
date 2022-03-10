import React from "react";
import { useQuery } from "@apollo/client";
import { PokemonsQuery } from "../../graphql/types";
import { Header } from "../../components/Header";
import { Box } from "../../components/Box";
import { Input } from "../../components/Input";
import { PokemonListItem } from "./PokemonListItem";
import { sortBy } from "../../utils/sortBy";
import { GET_POKEMONS } from "../../graphql/queries";

export function PokemonList() {
  const { loading, error, data } = useQuery<PokemonsQuery>(GET_POKEMONS);
  const pokemons = data?.pokemons ?? [];
  const sortedPokemons = sortBy(pokemons, "+name");
  console.log("loading", loading);
  console.log("error", error);

  return (
    <Box ml="80px" width="300px" border="1px solid grey">
      <Header>Select a Pokemon</Header>
      <Input type="text" placeholder="TYPE TO FILTER" />
      {sortedPokemons &&
        sortedPokemons.map((pokemon) => <PokemonListItem pokemon={pokemon} />)}
    </Box>
  );
}
