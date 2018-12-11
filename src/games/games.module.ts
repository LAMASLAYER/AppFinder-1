import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { CharactersModule } from './characters/characters.module';
import { GamesRoutingModule } from './games.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    CharactersModule,
    RouterModule
  ],
  declarations: [GamesComponent]
})
export class GamesModule { }
