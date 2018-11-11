import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { homeRoutes } from './home/home.routing.module';





export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', children: homeRoutes },
  ];




  @NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
