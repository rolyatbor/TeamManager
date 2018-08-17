import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
    error: "";
    players
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.getPlayers()
    }

    getPlayers(){
        let obs = this._httpService.getPlayers();
        obs.subscribe(data=>{
            this.players = data['players']
        })
    }
    invoke(){
        this.getPlayers();
    }
}
