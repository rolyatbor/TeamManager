import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    { path: 'players', component: HomeComponent, children: [
        { path: 'list', component: ListPlayersComponent},
        { path: 'addPlayer', component: AddPlayerComponent}
    ]},
    { path: 'status/game/:num', component: StatusComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
