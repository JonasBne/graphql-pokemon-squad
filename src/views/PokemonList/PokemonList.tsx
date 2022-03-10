import React from "react";
import { useQuery, gql } from "@apollo/client";
import { PokemonsQuery } from "../../graphql/types";
import { Header } from "../../components/Header";
import { Box } from "../../components/Box";

const GET_POKEMONS = gql`
  query pokemons {
    pokemons(first: 15) {
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
  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);
  return (
    <Box ml="80px" width="250px" border="1px solid grey">
      <Header>Select a Pokemon</Header>
      <input type="text" />
    </Box>
  );
}
