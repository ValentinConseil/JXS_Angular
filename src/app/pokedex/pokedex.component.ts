import { Component, OnInit, Input } from '@angular/core';
import { POKEMONS } from './../mock-pokemon';
import { pokemon } from './../pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = POKEMONS;

  constructor() { }

  ngOnInit() {
   // this.PokemonService.getAllPokemons();
  }
  @Input() id: number;
}
