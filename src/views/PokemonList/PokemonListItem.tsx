import React from "react";
import { Pokemon } from "../../graphql/types";

interface PokemonListItemProps {
  pokemon: Pokemon | null;
}

export function PokemonListItem({ pokemon }: PokemonListItemProps) {
  return <li>{pokemon?.name}</li>;
}
