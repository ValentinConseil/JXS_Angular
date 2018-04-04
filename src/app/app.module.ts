import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';

//Pipe
import { PokemonNamePipe } from './pipes/pokemon-name/pokemon-name.pipe';

//Service
import { PokeapiService } from './pokeapi.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonNamePipe,
    PokeinfoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    PokemonNamePipe
  ],
  providers: [PokeapiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
