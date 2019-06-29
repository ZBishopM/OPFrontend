import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mode} from '../class/mode';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  apiUrl = 'http://localhost:8080/api/mode'
  constructor(private http: HttpClient) { }

  getModes(){
    return this.http.get<Mode[]>(this.apiUrl);
  }
}
