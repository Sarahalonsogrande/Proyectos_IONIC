// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-ficha-pelicula',
//   templateUrl: './ficha-pelicula.component.html',
//   styleUrls: ['./ficha-pelicula.component.scss'],
// })
// export class FichaPeliculaComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }

import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { GestionMoviesService } from '../services/gestion-movies.service';
import { FichaMovie } from '../interfaces/ficha-movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class FichaPeliculaComponent  implements OnInit {

  gestionMovies = inject(GestionMoviesService);
  movies : FichaMovie[] = [];

  constructor() {
    this.gestionMovies.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }

  ngOnInit() {}
  
}
