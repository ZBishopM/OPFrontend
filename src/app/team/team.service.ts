import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../class/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  apiUrl = 'http://localhost:8080/api/team'

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Team[]>(this.apiUrl);
  }
  postTeam(data:Team){
    return this.http.post<Team>(this.apiUrl,data)
  }
  putTeam(data:Team){
    return this.http.put<Team>(this.apiUrl,data)
  }
}
