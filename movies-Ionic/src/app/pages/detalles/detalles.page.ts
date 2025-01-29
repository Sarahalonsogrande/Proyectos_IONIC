import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Movie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetallesPage implements OnInit {
  titulo: string = "";
  pelicula: Movie | undefined;
  constructor(private ar: ActivatedRoute, private dataService: PeliculasService) { }
  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.titulo = params['titulo'];
    });
    this.pelicula = this.dataService.movies.find(pelicula => pelicula.Title ===
      this.titulo);
  }
}
