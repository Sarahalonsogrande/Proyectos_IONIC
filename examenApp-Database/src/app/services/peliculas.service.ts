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

  constructor() { }
}
