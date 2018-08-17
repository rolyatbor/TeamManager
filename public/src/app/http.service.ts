import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  addPlayer(newPlayer){
      return this._http.post("/players", newPlayer)
  }

  getPlayers(){
      return this._http.get('/players')
  }
}
