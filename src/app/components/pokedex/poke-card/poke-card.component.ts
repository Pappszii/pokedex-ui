import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';
import { TYPE_COLORS } from 'src/app/models/pokemon.constant';
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {
  @Input() pokemon: Pokemon;
  @Input() favorite: boolean;

  constructor(private readonly dialog: MatDialog) {
  }

  getTypeColor(): string {
    const color = TYPE_COLORS.find(pair => pair.key === this.pokemon.type)?.value;
    return color ? color : 'lightgrey';
  }

  openDialog() {
    this.dialog.open(PokeDialogComponent, {
      data: {
        pokemon: this.pokemon
      }
    });
  }

  onFavPokemon(event: any) {
    event.stopPropagation();
    //TODO: ADD ... userService.addFavorites()
  }
}
