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
                        pokemonsReceived.push(new pokemon(value['url'].substring(value['url'].indexOf('n/')+2,value['url'].length-1),value['name'],value['url']) );
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

              console.log(data);


    });
  }
  @Input() id: number;
  @Input() name: string;

}
