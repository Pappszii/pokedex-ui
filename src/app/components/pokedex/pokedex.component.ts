import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokedexApiService } from 'src/app/services/pokedex-api.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  searchValue = '';
  pokemons: Pokemon[] = [];
  favorites = [];

  constructor(public readonly authService: AuthService,
    private readonly pokedexApiService: PokedexApiService,
    private readonly userService: UserService) {
    this.pokedexApiService.getAllPokemon()
      .pipe(take(1))
      .subscribe(response => this.pokemons = response);
    this.userService.getFavorites().then(favs => this.favorites = favs);
  }

  onSearch() {
    this.pokedexApiService.getPokemonsByName(this.searchValue)
      .pipe(take(1))
      .subscribe(response => this.pokemons = response);
  }

  isPokemonFavorite(pokemon: Pokemon) {
    return this.favorites.some((num) => num === pokemon.id);
  }
}
