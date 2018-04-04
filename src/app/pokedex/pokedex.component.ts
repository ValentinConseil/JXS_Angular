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

//  pokemons = POKEMONS;

  public selectedPokemon : pokemon;

  public pokemons : pokemon[];
  constructor(private pokeApi:PokeapiService) {
    this.pokemons = new Array<pokemon>();
  }

  ngOnInit(){

          this.pokeApi.getAllPokemons().subscribe(data => {
                    var results = data['results'];
                    var pokemonsReceived = new Array<pokemon>();
                    results.forEach(function (value) {
                      var currentPokemon = new pokemon();
                      currentPokemon.id = value['url'].substring(value['url'].indexOf('n/')+2,value['url'].length-1);
                      currentPokemon.name = value['name'];
                      currentPokemon.url = value['url'];

                        pokemonsReceived.push(currentPokemon);
                    });
                    this.pokemons = pokemonsReceived;
                    console.log(this.pokemons);
          });
  }


  goClick(){
  }

  onSelect(id : number){

    this.selectedPokemon = this.pokemons.find(i => i.id === id);
    this.pokeApi.getPokemonInfo(id).subscribe(data => {
        this.selectedPokemon.img = data.sprites.front_default;
        this.selectedPokemon.weight = data.weight;
    });
  }
  @Input() id: number;
  @Input() name: string;

}
