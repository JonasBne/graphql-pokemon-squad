import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
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
