export interface pokeList {
  count : number;
  previous : string;
  results : pokeLocation[];
}

export class pokeLocation{
  url : string;
  name : string;
}
