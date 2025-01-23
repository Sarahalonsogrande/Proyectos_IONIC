import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ficha-pelicula',
  templateUrl: './ficha-pelicula.component.html',
  styleUrls: ['./ficha-pelicula.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class FichaPeliculaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
