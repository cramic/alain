import { TestBed } from '@angular/core/testing';

import { ChiensElevageService } from './chiens-elevage.service';

describe('ChiensElevageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChiensElevageService = TestBed.get(ChiensElevageService);
    expect(service).toBeTruthy();
  });
});
