import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  heros: Array<SuperHero> = [];
  constructor() { }

  getSuperHeros(): Array<SuperHero> {
    let hero: SuperHero = { id: 1, name: 'Spider Man', firstName: 'Peter', lastName: "Parker", place: "New York City" };
    this.heros.push(hero);
    return this.heros;
  }
}
