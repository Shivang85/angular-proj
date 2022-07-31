import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private urlt='http://localhost:9000/tourists/get';
  
  constructor(private httpClient: HttpClient) { }

  getTouristList(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.urlt}`);
  }
  
  private url = 'http://localhost:9000/tourists/add';
  createTourist(tourist: Tourist):Observable<object>{
    return this.httpClient.post(`${this.url}`, tourist);
  }
}
