import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FichaMovie } from '../interfaces/ficha-movie'

@Injectable({
  providedIn: 'root'
})
export class GestionMoviesService {

  static URL = 'https://fpaniaguajavascript.github.io/movies.json';

  constructor(private httpClient: HttpClient) { }

  public getMovies() : Observable<FichaMovie[]> {
    return this.httpClient.get<FichaMovie[]>(GestionMoviesService.URL);
  }
}
