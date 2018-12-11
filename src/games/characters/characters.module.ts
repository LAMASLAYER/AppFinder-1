import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { SingleCharacterComponent } from './containers/single-character/single-character.component';
import { CharactersRoutingModule } from './characters.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule

  ],
  declarations: [CharactersComponent, SingleCharacterComponent]
})
export class CharactersModule { }
