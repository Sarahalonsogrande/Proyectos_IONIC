import { TestBed } from '@angular/core/testing';

import { GestionMoviesService } from './gestion-movies.service';

describe('GestionMoviesService', () => {
  let service: GestionMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
