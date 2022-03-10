import React from "react";
import { Pokemon } from "../../graphql/types";
import { ListItem } from "../../components/ListItem";

interface PokemonListItemProps {
  pokemon: Pokemon | null;
}

export function PokemonListItem({ pokemon }: PokemonListItemProps) {
  return <ListItem>{pokemon?.name}</ListItem>;
}
