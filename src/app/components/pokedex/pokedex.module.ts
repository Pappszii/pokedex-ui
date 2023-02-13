import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [PokedexComponent, PokeCardComponent, PokeDialogComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [PokedexComponent]
})
export class PokedexModule { }
