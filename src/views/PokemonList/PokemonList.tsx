import React from "react";
import { useQuery, gql } from "@apollo/client";
import { PokemonsQuery } from "../../graphql/types";
import { Header } from "../../components/Header";
import { Box } from "../../components/Box";
import { Input } from "../../components/Input";
import { PokemonListItem } from "./PokemonListItem";

const GET_POKEMONS = gql`
  query pokemons {
    pokemons(first: 15) {
      id
      name
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`;

export function PokemonList() {
  const { loading, error, data } = useQuery<PokemonsQuery>(GET_POKEMONS);
  const pokemons = data?.pokemons ?? [];
  console.log("loading", loading);
  console.log("error", error);

  return (
    <Box ml="80px" width="300px" border="1px solid grey">
      <Header>Select a Pokemon</Header>
      <Input type="text" placeholder="TYPE TO FILTER" />
      {pokemons &&
        pokemons.map((pokemon) => <PokemonListItem pokemon={pokemon} />)}
    </Box>
  );
}
