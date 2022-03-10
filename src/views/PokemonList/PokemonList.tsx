import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons {
    pokemons(first: 100) {
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
  const { loading, error, data } = useQuery(GET_POKEMONS);
  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);
  return <div>pokemonlist</div>;
}
