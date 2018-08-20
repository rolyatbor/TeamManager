import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
    game = "game1";
    changePlayer;
    num;
    players;
    constructor(
        private _route: ActivatedRoute,
        private _httpService: HttpService,
        private _router: Router) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => this.num = (params['num']));
        this.getPlayers();
    }

    getPlayers(){
        let obs = this._httpService.getPlayers();
        obs.subscribe(data=>{
            this.players = data['players']
        })
    }

    updateStatus(gameNum, changingStatus, changingPlayer){
        let player = changingPlayer;
        let newStatus;
        player.status[gameNum] = changingStatus;
        if(gameNum == 'game1'){
            newStatus = {game1: changingStatus, game2: player.status.game2, game3: player.status.game3}
        }
        else if(gameNum == 'game2'){
            newStatus = {game1: player.status.game1, game2: changingStatus, game3: player.status.game3}
        } else {
            newStatus = {game1: player.status.game1, game2: player.status.game2, game3: changingStatus}
        }
        this.changePlayer = {name: player.name, position: player.position, status: newStatus }
        let obs = this._httpService.updateStatus(player._id, this.changePlayer)
        obs.subscribe(data=>{})
    }

    newGame(num){
        this.game = 'game' + num
        this.num = num;
        this.getPlayers();
    }
}
