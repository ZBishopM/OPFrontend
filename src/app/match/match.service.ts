import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../class/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  apiUrl = 'http://localhost:8080/api/match'

  constructor(private http: HttpClient) { }

  getMatchs(){
    return this.http.get<Match[]>(this.apiUrl);
  }
  postMatch(data:Match){
    return this.http.post<Match>(this.apiUrl,data)
  }
  putMatch(data:Match){
    return this.http.put<Match>(this.apiUrl,data)
  }
  getMatchsTournament(id){
    let newUrl= this.apiUrl + `/tournament/${id}`
    return this.http.get<Match[]>(newUrl);
  }
}
