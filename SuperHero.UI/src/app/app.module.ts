import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDeletConfirmationComponent } from './components/hero-delet-confirmation/hero-delet-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    EditHeroComponent,
    HerosComponent,
    HeroDeletConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
