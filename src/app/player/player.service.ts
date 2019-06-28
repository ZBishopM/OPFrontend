import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../class/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiUrl = 'http://localhost:8080/api/player'

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<Player[]>(this.apiUrl);
  }
  postPlayer(data:Player){
    return this.http.post<Player>(this.apiUrl,data)
  }
}
