import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heros: SuperHero[] = [];

  constructor(private service: SuperHeroService) {
    this.heros = service.getSuperHeros();
    console.log(this.heros);
  }
}
