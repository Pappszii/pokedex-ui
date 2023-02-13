import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

const POKEMON_PATH = 'pokemons';
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  constructor(private readonly http: HttpClient) { }


  getAllPokemon(query?: string, ): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.buildURL([POKEMON_PATH]));
  }

  getPokemonsByName(filter: string) {
    return this.http.get<Pokemon[]>(this.buildURL([POKEMON_PATH, this.buildQuery(filter)]));
  }

  private buildURL(path: string[]): string {
    return `${environment.pokedexApiUrl}/${path.join('/')}`;
  }

  private buildQuery(filter: string, offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT): string {
    return `?filter=${filter}&offset=${offset}&limit=${limit}`;
  }
}
