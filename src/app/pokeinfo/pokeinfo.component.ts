import { Component, OnInit, Input } from '@angular/core';
import { pokemon } from './../pokemon';

@Component({
  selector: 'app-pokeinfo',
  templateUrl: './pokeinfo.component.html',
  styleUrls: ['./pokeinfo.component.css']
})
export class PokeinfoComponent implements OnInit {

 @Input()  selectedPokemon : pokemon;

  constructor() { }

  ngOnInit() {
  }

}
