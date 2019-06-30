import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics} from '../class/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiUrl = 'http://localhost:8080/api/statistics'

  constructor(private http: HttpClient) { }

  getStatistics(){
    return this.http.get<Statistics[]>(this.apiUrl);
  }
  getStatisticsMatch(id){
    let newUrl= this.apiUrl + `/match/${id}`
    return this.http.get<Statistics[]>(newUrl);
  }
  getStatisticsPlayer(id){
    let newUrl= this.apiUrl + `/player/${id}`
    return this.http.get<Statistics[]>(newUrl);
  }
}
