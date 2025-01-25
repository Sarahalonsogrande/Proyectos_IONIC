import { TestBed } from '@angular/core/testing';

import { MenusManagerService } from './menus-manager.service';

describe('MenusManagerService', () => {
  let service: MenusManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
