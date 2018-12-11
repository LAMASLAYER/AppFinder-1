import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { homeRoutes } from './home/home.routing.module';





export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', children: homeRoutes },
    { path: 'games', loadChildren: '../games/games.module#GamesModule' },
    { path: '**', redirectTo: 'home' }
  ];




  @NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
