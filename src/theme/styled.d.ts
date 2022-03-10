import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      general: {
        blue: string;
        yellow: string;
        white: string;
        grey: string;
      },
      types: {
        normal: string;
        fire: string;
        water: string;
        electric: string;
        grass: string;
        ice: string;
        poison: string;
        fighting: string;
        ground: string;
        flying: string;
        psychic: string;
        bug: string;
        rock: string;
        ghost: string;
        dragon: string;
        dark: string;
        steel: string;
        fairy: string;
      }
    };
  }
}