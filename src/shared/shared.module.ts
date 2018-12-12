import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareComponents } from './components';
import { ConnexionService } from './services/connexion-service.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...ShareComponents
    ],
  exports: [
    ...ShareComponents
  ],
  providers: [
    ConnexionService
  ]

})
export class SharedModule { }
