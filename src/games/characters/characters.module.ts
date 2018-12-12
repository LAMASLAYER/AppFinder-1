import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing.module';
import { CharactersServices } from './services';
import { CharactersContainers } from './containers';
import { CharactersComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule

  ],
  declarations: [
    CharactersComponent,
    ...CharactersContainers,
    ...CharactersComponents
    ],
    providers: [
      ...CharactersServices,

    ]
})
export class CharactersModule { }
