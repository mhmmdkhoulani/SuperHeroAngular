import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { HerosComponent } from './components/heros/heros.component';

const routes: Routes = [
  { path: '', component: HerosComponent },
  { path: 'hero/:id', component: EditHeroComponent },
  { path: 'hero', component: EditHeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
