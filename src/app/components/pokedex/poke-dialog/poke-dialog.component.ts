import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon';
import { TYPE_COLORS } from 'src/app/models/pokemon.constant';

@Component({
  selector: 'app-poke-dialog',
  templateUrl: './poke-dialog.component.html',
  styleUrls: ['./poke-dialog.component.scss']
})
export class PokeDialogComponent {
  selected = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { pokemon: Pokemon }) {
  }

  getPic() {
    return this.selected ? this.data.pokemon.frontSprite : this.data.pokemon.backSprite;
  }

  getTypeColor(): string {
    const color = TYPE_COLORS.find(pair => pair.key === this.data.pokemon.type)?.value;
    return color ? color : 'lightgrey';
  }
}
