import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  search = '';
  value = ''
  pokemon = {
    id: 1,
    name: 'Pikachu',
    type: 'electric',
    hp: 50,
    att: 41,
    def: 23,
    speed: 34,
    pictures: [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    ]
  } as Pokemon;
  pokemon1 = {
    id: 1,
    name: 'Pikachu',
    type: 'electric',
    hp: 50,
    att: 41,
    def: 23,
    speed: 34,
    pictures: [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    ]
  } as Pokemon;
  pokemons: Pokemon[] = []; 

  constructor(public readonly authService: AuthService) {
    this.pokemons.push(...[this.pokemon, this.pokemon1, this.pokemon1, this.pokemon1, this.pokemon1, this.pokemon1, this.pokemon1]);
  }

}
