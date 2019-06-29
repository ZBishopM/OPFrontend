import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Tournament} from '../class/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  apiUrl='http://localhost:8080/api/tournament'

  constructor(private http:HttpClient) { }

  getTournaments(){
    return this.http.get<Tournament[]>(this.apiUrl);
  }
  postTournament(data:Tournament){
    return this.http.post<Tournament>(this.apiUrl,data)
  }
  putTournament(data:Tournament){
    return this.http.put<Tournament>(this.apiUrl,data)
  }
}
