import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';
import { delay, Observable } from 'rxjs';
const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
  })
  export class PeliculasService
  {
  private http = inject
  (HttpClient);
  public movies: Movie[] = [];
  constructor() { }
  getMovie
  (title: string): Observable<Movie> {
  return this.http .get<Movie>(`${BASE_URL}?apikey=${API_KEY}&t=${title}`)
  .pipe(
  delay(1000) //Simulación de retardo
  );
  }
  addMovie
  (movie: Movie) {
  this.movies.push
  (movie);
  }
  }
