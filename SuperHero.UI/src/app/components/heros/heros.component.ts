import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  title = 'SuperHero.UI';
  heros: SuperHero[] = [];

  constructor(private service: SuperHeroService, private route: Router) {

  }
  ngOnInit(): void {
    this.getAllHeros();
  }
  getAllHeros() {
    return this.service.getSuperHeros().subscribe((result: SuperHero[]) => this.heros = result);
  }

  editHero(hero: SuperHero) {
    this.route.navigate(['/hero', hero.id]);
  }
  goToAdd() {
    this.route.navigate(['/hero']);
  }

  deleteHero(hero: SuperHero) {
    if (confirm(`Are you sure you want to delete ${hero.name}?`)) {
      let id = hero.id;
      this.service.deleteSuperHero(id).subscribe(r => { this.getAllHeros() });
      alert('Hero deleted successfully');
      this.service.getSuperHeros().subscribe((result: SuperHero[]) => this.heros = result);
    }
  }

}
