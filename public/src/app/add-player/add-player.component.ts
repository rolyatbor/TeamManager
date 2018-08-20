import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
    @Output() updateList = new EventEmitter();
    newPlayer: any;
    error: "";
    players

  constructor(
    private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.newPlayer = {name: "", position: ""}
  }

  addPlayer(){
      let obs = this._httpService.addPlayer(this.newPlayer);
      obs.subscribe(data=>{
          if(data['messages']){
              this.error = data['messages']
          } else {
              this.newPlayer = {name: "", position: ""};
              this.updateList.emit();
              this._router.navigate(['/players/list'])
          }
      })
  }

  closeBox(){
      this.newPlayer = {name: "", position: ""}
  }

}
