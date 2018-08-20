import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  addPlayer(newPlayer){
      return this._http.post("/playersAdd", newPlayer)
  }

  getPlayers(){
      return this._http.get('/playersAll')
  }

  deletePlayer(id){
      return this._http.delete(`/players/${id}`)
  }

  updateStatus(id, player){
      console.log('player in service: ',player)
    return this._http.put(`/player/${id}`, player)
  }
}
