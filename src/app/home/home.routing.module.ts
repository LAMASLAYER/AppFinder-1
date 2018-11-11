import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent, data: {baseRoute: '/home'}
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
