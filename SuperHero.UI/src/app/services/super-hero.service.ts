import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  heros: Array<SuperHero> = [];
  private url = 'https://localhost:7294/api/SuperHeros'
  constructor(private http: HttpClient) { }

  getSuperHeros(): Observable<SuperHero[]> {

    return this.http.get<SuperHero[]>(this.url);
  }

  getSuperHero(id: number): Observable<SuperHero> {

    return this.http.get<SuperHero>(this.url + `/${id}`);
  }

  updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(this.url, hero);
  }

  addSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(this.url, hero);
  }

  deleteSuperHero(id: any) {
    return this.http.delete(this.url + `/${id}`);
  }


}
