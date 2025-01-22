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
export class HomePage {

  gestionMovies = inject(GestionMoviesService);
  movies : FichaMovie[] = [];

// GestionMoviesService: any;
// Title:      string;
// Year:       string;
// Rated:      string;
// Released:   string;
// Runtime:    string;
// Genre:      string;
// Director:   string;
// Writer:     string;
// Actors:     string;
// Plot:       string;
// Language:   string;
// Country:    string;
// Awards:     string;
// Poster:     string;
// Metascore:  string;
// imdbRating: string;
// imdbVotes:  string;
// imdbID:     string;
// Type:       string;
// Response:   string;
// Images:     string[];

  constructor() {
    this.gestionMovies.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}

// <app-pelicula-component [peli]="movie"></app-pelicula-component> EXPLORAR ESTA MOVIDA
