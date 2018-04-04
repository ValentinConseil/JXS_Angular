import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokeapiService {

  private pokeApiUrl = "http://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) {

   }

   getAllPokemons(): Observable<any> {

        return this.http.get(this.pokeApiUrl+"pokemon/?limit=949");
    }
    getPokemonInfo(id : number): Observable<any> {
         return this.http.get(this.pokeApiUrl+"pokemon/"+id+"/");
    }
}
