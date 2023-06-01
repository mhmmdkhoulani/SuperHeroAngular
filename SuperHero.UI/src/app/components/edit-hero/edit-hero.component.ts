import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService, } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})

export class EditHeroComponent implements OnInit {
  form: any;
  hero?: SuperHero;
  id: any;

  constructor(private fb: FormBuilder, private service: SuperHeroService, private route: ActivatedRoute, private navigator: Router) {




  }
  ngOnInit(): void {

    this.form = this.fb.group({
      name: [this.hero?.name, Validators.required],
      firstName: [this.hero?.firstName, Validators.required],
      lastName: [this.hero?.lastName, Validators.required],
      place: [this.hero?.place, Validators.required],
    });

    this.route.paramMap.subscribe(value => {
      let idParam = value.get('id');
      idParam == null ? this.id = null : this.id = idParam;


    });
    if (this.id != null) {
      this.service.getSuperHero(this.id).subscribe((result) => {
        this.hero = result;

        this.form.setValue({ name: this.hero.name, firstName: this.hero.firstName, lastName: this.hero.lastName, place: this.hero.place });
      });
    }

  }
  get Name() {
    return this.form.get('name');
  }

  get FirstName() {
    return this.form.get('firstName');
  }
  get LastName() {
    return this.form.get('lastName');
  }
  get Place() {
    return this.form.get('place');
  }
  onSubmit() {

  }
  updateHero() {
    this.hero = { id: this.id, name: this.Name.value, firstName: this.FirstName.value, lastName: this.LastName.value, place: this.Place.value };
    this.service.updateSuperHero(this.hero).subscribe(result => {
      this.navigator.navigate(['']);
    });

  }

  addNewHero() {
    this.hero = { name: this.Name.value, firstName: this.FirstName.value, lastName: this.LastName.value, place: this.Place.value };
    this.service.addSuperHero(this.hero).subscribe(result => {
      this.navigator.navigate(['']);
    });
  }
  deleteHero(hero: SuperHero) {

  }
  CreateHero(hero: SuperHero) {

  }
}
