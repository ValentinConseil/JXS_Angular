import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokeapiService {

  private pokeApiUrl = "http://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) {

    this.getAllPokemons().subscribe(data => {
                console.log(data)
            });

   }

   getAllPokemons(): Observable<any> {
        return this.http.get(this.pokeApiUrl+"pokemon/1");
    }

}
