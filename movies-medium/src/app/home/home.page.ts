import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FichaPeliculaComponent } from "../components/ficha-pelicula/ficha-pelicula.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FichaPeliculaComponent],
})
export class HomePage {
  constructor() {}
}
