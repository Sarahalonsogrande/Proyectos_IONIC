import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { delay, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private http = inject(HttpClient);
  public movies : Movie[] = [];

  constructor() { }

  getMovie(title : string) : Observable<Movie> {
    return this.http
    .get<Movie>(`${BASE_URL}?apyKey=${API_KEY}$t=${title}`)
    .pipe(delay(1500));
  };

  addMovie(movie : Movie) {
    this.movies.push(movie);
  }
}
