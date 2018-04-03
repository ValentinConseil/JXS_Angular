import { Component, OnInit, Input } from '@angular/core';
import { POKEMONS } from './../mock-pokemon';
import { pokemon } from './../pokemon';
import {PokeapiService} from './../pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons = POKEMONS;

  constructor(private pokeApi:PokeapiService) {

  }

  ngOnInit(){

   this.pokeApi.getAllPokemons().subscribe(data => {
             console.log(data)
         });
  }

  goClick(){
    console.log(this.name);
  }
  @Input() id: number;
  @Input() name: string;

}
